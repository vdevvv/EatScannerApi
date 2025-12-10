import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { NotificationsModule } from '~/notifications/notifications.module';

@Module({
  imports: [NotificationsModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
