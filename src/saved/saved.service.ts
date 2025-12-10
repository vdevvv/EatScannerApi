import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import { PageDto, PageMetaDto, PageOptionsDto } from '~/common/dto/page';

@Injectable()
export class SavedService {
  constructor(private readonly prisma: PrismaService) {}

  async toggle(userId: string, menuItemId: string) {
    const existing = await this.prisma.savedItem.findUnique({
      where: {
        userId_menuItemId: { userId, menuItemId },
      },
    });

    if (existing) {
      await this.prisma.savedItem.delete({
        where: {
          userId_menuItemId: { userId, menuItemId },
        },
      });

      return { status: 'removed', isSaved: false };
    } else {
      await this.prisma.savedItem.create({
        data: { userId, menuItemId },
      });
      return { status: 'added', isSaved: true };
    }
  }

  async getMySaved(userId: string, pageOptionsDto: PageOptionsDto) {
    const { skip, take } = pageOptionsDto;

    const [data, itemsCount] = await Promise.all([
      this.prisma.savedItem.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take,
        include: {
          item: {
            include: {
              category: {
                include: { menu: { include: { restaurant: true } } },
              },
            },
          },
        },
      }),
      this.prisma.savedItem.count({
        where: { userId },
      }),
    ]);

    const mappedData = data.map((entry) => {
      const item = entry.item;
      const restaurant = item.category.menu.restaurant;

      return {
        id: item.id,
        name: item.name,
        image: item.image,
        video: item.video,
        highlighted: item.highlighted,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          country: restaurant.country,
        },
      };
    });

    const pageMetaDto = new PageMetaDto({ pageOptionsDto, itemsCount });
    return new PageDto(mappedData, pageMetaDto);
  }

  async isSaved(userId: string, menuItemId: string) {
    const existing = await this.prisma.savedItem.findUnique({
      where: {
        userId_menuItemId: { userId, menuItemId },
      },
    });

    return !!existing;
  }
}
