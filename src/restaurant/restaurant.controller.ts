import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {
  CreateRestaurantDto,
  GetRestaurantsDto,
} from '~/restaurant/dto/restaurant.dto';
import { GetUserId, Public } from '~/common/decorators';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async createRestaurant(@Body() dto: CreateRestaurantDto) {
    return this.restaurantService.createRestaurant(dto);
  }

  @Get()
  async getRestaurants(
    @GetUserId() userId: string,
    @Query() dto: GetRestaurantsDto,
  ) {
    return this.restaurantService.getRestaurants(userId, dto);
  }

  @Public()
  @Get(':id/menu')
  getMenu(@Param('id') id: string) {
    return this.restaurantService.getMenu(id);
  }

  @Get(':id/menu-item')
  async getMenuItem(@Param('id') id: string) {
    return this.restaurantService.getMenuItem(id);
  }
}
