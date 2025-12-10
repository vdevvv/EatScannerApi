import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import { CreateOrderDto } from '~/order/dto/order.dto';
import { PageDto, PageMetaDto, PageOptionsDto } from '~/common/dto/page';
import { Prisma } from '@prisma/client';
import { NotificationsService } from '~/notifications/notifications.service';

type OrderWithRelations = Prisma.OrderGetPayload<{
  include: { user: true; menuItem: true; restaurant: true };
}>;

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async create(userId: string, dto: CreateOrderDto) {
    const menuItem = await this.prisma.menuItem.findUnique({
      where: { id: dto.menuItemId },
      include: {
        category: {
          select: {
            menu: {
              select: { restaurant: { select: { id: true, type: true } } },
            },
          },
        },
      },
    });

    if (!menuItem) {
      throw new NotFoundException('Menu item not found');
    }

    const order = await this.prisma.order.create({
      data: {
        userId,
        menuItemId: dto.menuItemId,
        deliveryService: dto.deliveryService,
        price: menuItem.price,
        restaurantId: menuItem.category.menu.restaurant.id,
        badgesSnapshot: menuItem.badges,
        venueTypeSnapshot: menuItem.category.menu.restaurant.type,
      },
      include: {
        user: true,
        menuItem: true,
        restaurant: true,
      },
    });

    this.notifyFriends(order).catch((err) => {
      this.logger.error('Failed to notify friends about order', err);
    });
  }

  async getUserOrders(userId: string, pageOptionsDto: PageOptionsDto) {
    const { skip, take } = pageOptionsDto;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const where: Prisma.OrderWhereInput = {
      userId,
      createdAt: {
        gte: thirtyDaysAgo,
      },
    };

    const [data, itemsCount] = await Promise.all([
      this.prisma.order.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: {
          menuItem: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          restaurant: {
            select: {
              id: true,
              name: true,
              address: true,
              city: true,
            },
          },
        },
      }),
      this.prisma.order.count({
        where,
      }),
    ]);

    const pageMetaDto = new PageMetaDto({ pageOptionsDto, itemsCount });
    return new PageDto(data, pageMetaDto);
  }

  private async notifyFriends(order: OrderWithRelations) {
    const currentUserId = order.userId;
    const friendships = await this.prisma.friendship.findMany({
      where: {
        status: 'ACCEPTED',
        OR: [{ requesterId: currentUserId }, { receiverId: currentUserId }],
      },
      select: {
        requesterId: true,
        receiverId: true,
      },
    });

    const friendIds = friendships.map((f) =>
      f.requesterId === currentUserId ? f.receiverId : f.requesterId,
    );

    if (friendIds.length === 0) return;

    const title = `Your friend ${order.user.userName || 'User'} has placed an order!`;
    const body = `They ordered ${order.menuItem.name} at ${order.restaurant.name}`;

    await this.notificationsService.sendToUsers(friendIds, title, body, {
      type: 'ORDER_FRIEND_ACTIVITY',
      menuItemId: order.menuItemId,
    });
  }
}
