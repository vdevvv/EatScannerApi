import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateMenuItemDto,
  SearchMenuItemsDto,
  UpdateMenuItemDto,
} from '~/menu/dto/menu.dto';
import { PrismaService } from '~/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { PageDto, PageMetaDto } from '~/common/dto/page';
import { PlaceService } from '~/place/place.service';

@Injectable()
export class MenuService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly placeService: PlaceService,
  ) {}

  async createMenuItem(dto: CreateMenuItemDto) {
    let finalCategoryId = dto.categoryId;

    if (dto.isNewCategory) {
      if (!dto.newCategoryName) {
        throw new BadRequestException(
          'New category name is required when isNewCategory is true',
        );
      }

      let menu = await this.prisma.menu.findUnique({
        where: { restaurantId: dto.restaurantId },
      });

      if (!menu) {
        menu = await this.prisma.menu.create({
          data: { restaurantId: dto.restaurantId },
        });
      }

      const newCategory = await this.prisma.category.create({
        data: {
          name: dto.newCategoryName,
          menuId: menu.id,
        },
      });

      finalCategoryId = newCategory.id;
    }

    return this.prisma.menuItem.create({
      data: {
        name: dto.name,
        price: dto.price,
        description: dto.description,
        image: dto.image,
        video: dto.video,
        badges: dto.badges,
        highlighted: !!dto.video,

        category: {
          connect: { id: finalCategoryId },
        },
      },
      include: {
        category: true,
      },
    });
  }

  async updateMenuItem(id: string, dto: UpdateMenuItemDto) {
    let finalCategoryId = dto.categoryId;
    if (dto.isNewCategory && dto.newCategoryName) {
      const currentItem = await this.prisma.menuItem.findUnique({
        where: { id },
        include: {
          category: true,
        },
      });

      if (!currentItem) {
        throw new NotFoundException('Menu item not found');
      }

      const menuId = currentItem.category.menuId;

      const newCategory = await this.prisma.category.create({
        data: {
          name: dto.newCategoryName,
          menuId: menuId,
        },
      });

      finalCategoryId = newCategory.id;
    }

    const tagsUpdate = dto.tagIds
      ? {
          set: dto.tagIds.map((tagId) => ({ id: tagId })),
        }
      : undefined;

    return this.prisma.menuItem.update({
      where: { id },
      data: {
        name: dto.name,
        price: dto.price,
        description: dto.description,
        image: dto.image,
        video: dto.video,
        badges: dto.badges,
        highlighted: !!dto.video,
        category: finalCategoryId
          ? { connect: { id: finalCategoryId } }
          : undefined,

        tags: tagsUpdate,
      },
      include: {
        category: true,
        tags: true,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.menuItem.delete({ where: { id } });
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

        const selectedTagSlugs =
          user?.selectedTags.map((tag) => tag.slug) || [];
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

  async getCategories(restaurantId: string) {
    const menu = await this.prisma.menu.findUnique({
      where: { restaurantId },
      include: { categories: true },
    });

    return menu?.categories;
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
