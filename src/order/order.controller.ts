import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { GetUserId } from '~/common/decorators';
import { CreateOrderDto } from '~/order/dto/order.dto';
import { PageOptionsDto } from '~/common/dto/page';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@GetUserId() userId: string, @Body() dto: CreateOrderDto) {
    return this.orderService.create(userId, dto);
  }

  @Get('/my')
  async getMyOrders(
    @GetUserId() userId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.orderService.getUserOrders(userId, pageOptionsDto);
  }

  @Get('user-orders/:userId')
  async getUserOrders(
    @Param('userId') userId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.orderService.getUserOrders(userId, pageOptionsDto);
  }
}
