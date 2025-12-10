import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import Expo, { ExpoPushMessage } from 'expo-server-sdk';
import { PrismaService } from '~/prisma/prisma.service';
import { PageDto, PageMetaDto, PageOptionsDto } from '~/common/dto/page';

@Injectable()
export class NotificationsService {
  private expo: Expo;
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private readonly prisma: PrismaService) {
    this.expo = new Expo();
  }

  async sendToUsers(
    userIds: string[],
    title: string,
    body: string,
    data: Record<string, string | number> = {},
  ) {
    const users = await this.prisma.user.findMany({
      where: { id: { in: userIds } },
      select: { id: true, pushToken: true },
    });

    if (users.length === 0) return;

    await this.prisma.notification.createMany({
      data: users.map((user) => ({
        userId: user.id,
        title,
        body,
        data,
      })),
    });

    const messages: ExpoPushMessage[] = [];
    for (const user of users) {
      if (user.pushToken && Expo.isExpoPushToken(user.pushToken)) {
        messages.push({
          to: user.pushToken,
          sound: 'default',
          title,
          body,
          data,
        });
      }
    }

    if (messages.length > 0) {
      const chunks = this.expo.chunkPushNotifications(messages);

      await Promise.all(
        chunks.map(async (chunk) => {
          try {
            await this.expo.sendPushNotificationsAsync(chunk);
          } catch (e) {
            this.logger.error('Error sending chunk', e);
          }
        }),
      );
    }
  }

  async getMyNotifications(userId: string, pageOptionsDto: PageOptionsDto) {
    const {skip, take} = pageOptionsDto

    const [data, itemsCount] = await Promise.all([
      this.prisma.notification.findMany({
        where: { userId },
        skip,
        take
      }),
      this.prisma.notification.count({
        where: { userId },
      })
    ])

    const pageMetaDto = new PageMetaDto({pageOptionsDto, itemsCount});
    return new PageDto(data, pageMetaDto);
  }

  async markAllAsRead(userId: string) {
    await this.prisma.notification.updateMany({
      where: {
        userId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });

    return { success: true };
  }

  async markAsRead(notificationId: string, userId: string) {
    const notification = await this.prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification || notification.userId !== userId) {
      throw new ForbiddenException('You do not own this notification');
    }

    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
    });
  }
}
