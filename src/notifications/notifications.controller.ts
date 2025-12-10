import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { GetUserId, Public } from '~/common/decorators';
import { PageOptionsDto } from '~/common/dto/page';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getMyNotifications(
    @GetUserId() userId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.notificationsService.getMyNotifications(userId, pageOptionsDto);
  }

  @Patch('mark-all-read')
  async markAllRead(@GetUserId() userId: string) {
    return this.notificationsService.markAllAsRead(userId);
  }

  @Patch('mark-read/:id')
  async markAsRead(
    @GetUserId() userId: string,
    @Param('id') notificationId: string,
  ) {
    return this.notificationsService.markAsRead(notificationId, userId);
  }
}
