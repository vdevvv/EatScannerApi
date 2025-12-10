import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateMenuItemDto,
  SearchMenuItemsDto,
  UpdateMenuItemDto,
} from '~/menu/dto/menu.dto';
import { PrismaService } from '~/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { PageDto, PageMetaDto, PageOptionsDto } from '~/common/dto/page';
import { PlaceService } from '~/place/place.service';

@Injectable()
export class MenuService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly placeService: PlaceService,
  ) {}

  async createMenuItem(dto: CreateMenuItemDto) {
    await this.checkIfCategoryExist(dto.categoryId);
    return this.prisma.menuItem.create({
      data: {
        name: dto.name,
        price: dto.price,
        description: dto.description,
        image: dto.image,
        categoryId: dto.categoryId,
      },
    });
  }

  async update(id: string, dto: UpdateMenuItemDto) {
    if (dto.categoryId) {
      await this.checkIfCategoryExist(dto.categoryId);
    }

    return this.prisma.menuItem.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: string) {
    return this.prisma.menuItem.delete({ where: { id } });
  }

  async findByCategory(categoryId: string) {
    return this.prisma.menuItem.findMany({ where: { categoryId } });
  }

  private async checkIfCategoryExist(categoryId: string) {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }
  }

  async getFilters(isSelectable: string) {
    const whereFragment =
      isSelectable === 'true'
        ? Prisma.sql`WHERE is_selectable = true`
        : Prisma.empty;

    const raw = await this.prisma.$queryRaw<any>`
      SELECT jsonb_object_agg(type, tags) AS grouped
      FROM (
        SELECT type, jsonb_agg(to_jsonb(t) - 'updatedAt') AS tags
        FROM tags t
        ${whereFragment} 
        GROUP BY type
      ) AS sub;
  `;

    return raw[0]?.grouped;
  }

  async getDiscovery(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { selectedTags: true },
    });

    const selectedTagSlugs = user?.selectedTags.map((tag) => tag.slug) || [];

    const [recommendedForYou, glutenFree, vegetarian, vegan] =
      await Promise.all([
        this.getMenuItemsByTag(selectedTagSlugs),
        this.getMenuItemsByTag(['gluten-free']),
        this.getMenuItemsByTag(['vegetarian']),
        this.getMenuItemsByTag(['vegan']),
      ]);

    return { recommendedForYou, glutenFree, vegetarian, vegan };
  }

  async search(userId: string, dto: SearchMenuItemsDto) {
    const { skip, take, query, tags } = dto;
    const conditions: Prisma.MenuItemWhereInput[] = [];

    if (query) {
      conditions.push({
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          {
            category: {
              menu: {
                restaurant: { name: { contains: query, mode: 'insensitive' } },
              },
            },
          },
        ],
      });
    }

    if (tags && tags.length > 0) {
      if (tags.length === 1 && tags[0] === 'recommended-for-you') {
        const user = await this.prisma.user.findUnique({
          where: { id: userId },
          include: { selectedTags: true },
        });

        const selectedTagSlugs = user?.selectedTags.map((tag) => tag.slug) || [];
        if (selectedTagSlugs && selectedTagSlugs.length > 0) {
          conditions.push({
            tags: { some: { slug: { in: selectedTagSlugs } } },
          });
        }
      } else {
        conditions.push({
          tags: { some: { slug: { in: tags } } },
        });
      }
    }

    const where: Prisma.MenuItemWhereInput = {
      AND: conditions,
      video: { not: null },
    };

    const [data, itemsCount] = await Promise.all([
      this.prisma.menuItem.findMany({
        where,
        include: this.getIncludes(),
        skip,
        take,
      }),
      this.prisma.menuItem.count({ where }),
    ]);

    const pageMetaDto = new PageMetaDto({ pageOptionsDto: dto, itemsCount });
    return new PageDto(data, pageMetaDto);
  }

  async getMenuItemById(id: string) {
    const menuItem = await this.prisma.menuItem.findUnique({
      where: { id },
      select: {
        name: true,
        description: true,
        image: true,
        video: true,
        price: true,
        category: {
          select: {
            menu: {
              select: {
                restaurant: {
                  select: {
                    name: true,
                    placeId: true,
                    talabatUrl: true,
                    careemUrl: true,
                    noonFoodUrl: true,
                    deliverooUrl: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!menuItem) {
      throw new NotFoundException('Menu item not found');
    }
    const { placeId, name, careemUrl, talabatUrl, deliverooUrl, noonFoodUrl } =
      menuItem.category.menu.restaurant;
    const rating = await this.placeService.getPlacesRating([placeId]);

    return {
      name: menuItem.name,
      description: menuItem.description,
      image: menuItem.image,
      video: menuItem.video,
      price: menuItem.price,
      restaurant: {
        name,
        placeId,
        rating: rating[placeId]?.rating ?? null,
        talabatUrl,
        careemUrl,
        noonFoodUrl,
        deliverooUrl,
      },
    };
  }

  private async getMenuItemsByTag(tagSlugs: string[]) {
    if (tagSlugs.length === 0) return [];

    return this.prisma.menuItem.findMany({
      where: {
        tags: { some: { slug: { in: tagSlugs } } },
        NOT: { video: null },
      },
      include: this.getIncludes(),
      take: 5,
    });
  }

  private getIncludes(): Prisma.MenuItemInclude {
    return {
      category: {
        include: {
          menu: {
            include: { restaurant: { select: { name: true, city: true } } },
          },
        },
      },
    };
  }
}
