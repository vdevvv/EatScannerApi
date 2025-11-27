import {
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

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

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

  // async getItemsBySlug(dto: SearchMenuItemsDto) {
  //   const { skip, take } = dto;
  //   const where: Prisma.MenuItemWhereInput = {
  //     tags: { some: { slug: { in: dto.tags } } },
  //   };
  //
  //   const [data, itemsCount] = await Promise.all([
  //     this.prisma.menuItem.findMany({
  //       where,
  //       include: this.getIncludes(),
  //       take,
  //       skip,
  //     }),
  //     this.prisma.menuItem.count({ where }),
  //   ]);
  //
  //   const pageMetaDto = new PageMetaDto({ pageOptionsDto: dto, itemsCount });
  //   return new PageDto(data, pageMetaDto);
  // }

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

  async search(dto: SearchMenuItemsDto) {
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
      conditions.push({
        tags: { some: { slug: { in: tags } } },
      });
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

  private async getMenuItemsByTag(tagSlugs: string[]) {
    if (tagSlugs.length === 0) return [];

    return this.prisma.menuItem.findMany({
      where: {
        tags: { some: { slug: { in: tagSlugs } } },
        NOT: { video: null },
      },
      include: this.getIncludes(),
      take: 7,
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
