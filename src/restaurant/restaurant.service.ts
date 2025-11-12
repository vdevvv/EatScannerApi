import {Injectable} from '@nestjs/common';
import {GeocodingService} from "~/geocoding/geocoding.service";
import {CreateRestaurantDto} from "~/restaurant/dto/restaurant.dto";
import {PrismaService} from "~/prisma/prisma.service";
import {PageDto, PageMetaDto, PageOptionsDto} from "~/common/dto/page";
import {Prisma} from "@prisma/client";

@Injectable()
export class RestaurantService {
  constructor(
    private readonly geocoding: GeocodingService,
    private readonly prisma: PrismaService,
  ) {
  }

  async createRestaurant(dto: CreateRestaurantDto) {
    const {latitude, longitude} = await this.geocoding.geocode(
      dto.address,
      dto.city,
      dto.country
    );

    return this.prisma.restaurant.create({
      data: {
        name: dto.name,
        city: dto.city,
        country: dto.country,
        address: dto.address,
        latitude,
        longitude,
        menu: {
          create: {}
        },
      },
      include: {menu: true}
    })
  }

  async getRestaurants(pageOptionsDto: PageOptionsDto) {
    const {skip, take} = pageOptionsDto;

    const itemsWhere: Prisma.MenuItemWhereInput = {
      video: {
        not: null,
        notIn: [''],
      }
    }

    const where: Prisma.RestaurantWhereInput = {
      menu: {
        is: {
          categories: {
            some: {
              items: {
                some: itemsWhere
              }
            }
          }
        }
      }
    }
    const [data, itemsCount] = await Promise.all([
      this.prisma.restaurant.findMany({
        skip,
        take,
        where,
        include: {
          menu: {
            include: {
              categories: {
                where: {
                  items: {
                    some: itemsWhere
                  }
                },
                include: {
                  items: {
                    where: itemsWhere
                  }
                }
              }
            }
          }
        },
      }),
      this.prisma.restaurant.count({where})
    ])

    const pageMetaDto = new PageMetaDto({pageOptionsDto, itemsCount});
    return new PageDto(data, pageMetaDto);
  }

  async getMenu(restaurantId: string) {
    return this.prisma.restaurant.findUnique({
      where: {id: restaurantId},
      include: {menu: {include: {categories: {include: {items: true}}}}}
    })
  }
}
