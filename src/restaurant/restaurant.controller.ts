import {
  Body,
  Controller,
  Get,
  Param, Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {
  CreateRestaurantDto,
  GetRestaurantsDto,
  UpdateRestaurantDto,
} from '~/restaurant/dto/restaurant.dto';
import { GetUserId, Public } from '~/common/decorators';
import { Roles } from '~/common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Roles(Role.ADMIN)
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

  @Roles(Role.ADMIN)
  @Patch(':id')
  async updateRestaurant(@Param('id') id: string, @Body() dto: UpdateRestaurantDto) {
    return this.restaurantService.updateRestaurant(id, dto);
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  async getRestaurant(@Param('id') id: string) {
    return this.restaurantService.getRestaurantById(id);
  }
}
