import { Injectable } from '@nestjs/common';
import { PlaceService } from '~/place/place.service';
import {
  CreateRestaurantDto,
  GetRestaurantsDto,
  UpdateRestaurantDto,
} from '~/restaurant/dto/restaurant.dto';
import { PrismaService } from '~/prisma/prisma.service';
import { PageDto, PageMetaDto, PageOptionsDto } from '~/common/dto/page';

@Injectable()
export class RestaurantService {
  constructor(
    private readonly placeService: PlaceService,
    private readonly prisma: PrismaService,
  ) {}

  async createRestaurant(dto: CreateRestaurantDto) {
    const { latitude, longitude, placeId } = await this.placeService.geocode(
      dto.address,
      dto.city,
      dto.country,
    );

    return this.prisma.restaurant.create({
      data: {
        name: dto.name,
        placeId,
        city: dto.city,
        country: dto.country,
        address: dto.address,
        latitude,
        longitude,
        careemUrl: dto.careemUrl,
        noonFoodUrl: dto.noonFoodUrl,
        talabatUrl: dto.talabatUrl,
        keetaUrl: dto.keetaUrl,
        deliverooUrl: dto.deliverooUrl,
        menu: { create: {} },
      },
      include: { menu: true },
    });
  }

  async getRestaurantsForAdmin(pageOptionsDto: PageOptionsDto) {
    const { skip, take } = pageOptionsDto;
    const [data, itemsCount] = await Promise.all([
      this.prisma.restaurant.findMany({
        skip,
        take,
        orderBy: { name: 'asc' },
      }),
      this.prisma.restaurant.count({}),
    ]);

    const pageMetaDto = new PageMetaDto({ pageOptionsDto, itemsCount });
    return new PageDto(data, pageMetaDto);
  }

  async getRestaurants(userId: string, dto: GetRestaurantsDto) {
    const { skip, take, latitude: lat, longitude: lon } = dto;

    const [restaurants, totalCount] = await Promise.all([
      this.prisma.$queryRaw<any[]>`
      WITH paginated_restaurants AS (
        SELECT r.id,
               r.place_id AS "placeId",
               r.name,
               r.city,
               r.latitude,
               r.longitude,
               (
                 3958.8 * acos(
                   cos(radians(${lat})) * cos(radians(r.latitude)) *
                   cos(radians(r.longitude) - radians(${lon})) +
                   sin(radians(${lat})) * sin(radians(r.latitude))
                 )
               ) AS distance
        FROM restaurants r
        WHERE EXISTS (
          SELECT 1
          FROM menus m
          JOIN categories c ON c.menu_id = m.id
          JOIN menu_items mi ON mi.category_id = c.id
          WHERE m.restaurant_id = r.id
            AND mi.video IS NOT NULL
            AND mi.video <> ''
        )
        ORDER BY distance
        LIMIT ${take} OFFSET ${skip}
      )

      SELECT 
        pr.id,
        pr."placeId",
        pr.name,
        pr.city,
        pr.latitude,
        pr.longitude,
        pr.distance,
        
        COALESCE(
          JSON_AGG(
            JSON_BUILD_OBJECT(
              'id', mi.id,
              'name', mi.name,
              'price', mi.price,
              'description', mi.description,
              'image', mi.image,
              'video', mi.video,
              'createdAt', mi.created_at,
              'isLiked', (EXISTS (SELECT 1 FROM favorites f WHERE f.menu_item_id = mi.id AND f.user_id = ${userId})),
              'isSaved', (EXISTS (SELECT 1 FROM saved_items s WHERE s.menu_item_id = mi.id AND s.user_id = ${userId}))
            )
          ) FILTER (WHERE mi.id IS NOT NULL), 
          '[]'
        ) as items

      FROM paginated_restaurants pr
      JOIN menus m ON m.restaurant_id = pr.id
      JOIN categories c ON c.menu_id = m.id
      JOIN menu_items mi ON mi.category_id = c.id
      
      WHERE mi.video IS NOT NULL 
        AND mi.video <> ''
      
      GROUP BY pr.id, pr.name, pr.city, pr.latitude, pr.longitude, pr.distance, pr."placeId"
      ORDER BY pr.distance
    `,

      this.prisma.$queryRaw<[{ count: bigint }]>`
        SELECT COUNT(DISTINCT r.id) as count
        FROM restaurants r
               JOIN menus m ON m.restaurant_id = r.id
               JOIN categories c ON c.menu_id = m.id
               JOIN menu_items mi ON mi.category_id = c.id
        WHERE mi.video IS NOT NULL
          AND mi.video <> ''
      `,
    ]);

    const formattedRestaurants = restaurants.map((r) => ({
      ...r,
      distance: Number(r.distance),
      items: r.items.map((item: any) => ({
        ...item,
        price: Number(item.price),
        isLiked: Boolean(item.isLiked),
        isSaved: Boolean(item.isSaved),
      })),
    }));

    const pageMetaDto = new PageMetaDto({
      pageOptionsDto: dto,
      itemsCount: Number(totalCount[0]?.count || 0),
    });

    return new PageDto(formattedRestaurants, pageMetaDto);
  }

  async getMenu(restaurantId: string) {
    return this.prisma.menu.findUnique({
      where: { restaurantId },
      include: { categories: { include: { items: true } } },
    });
  }

  async getMenuItem(id: string) {
    return this.prisma.menuItem.findUnique({
      where: { id },
    });
  }

  async updateRestaurant(id: string, dto: UpdateRestaurantDto) {
    return this.prisma.restaurant.update({
      where: { id },
      data: { ...dto },
    });
  }

  async getRestaurantById(id: string) {
    return this.prisma.restaurant.findUnique({
      where: { id },
    })
  }
}
