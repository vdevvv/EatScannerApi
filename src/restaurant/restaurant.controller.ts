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
import { Role } from '@prisma/client';
import {GetUserRole} from "~/common/decorators/get-role.decorator";

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async createRestaurant(
    @Body() dto: CreateRestaurantDto,
    @GetUserId() userId: string,
  ) {
    return this.restaurantService.createRestaurant(dto, userId);
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

  @Patch(':id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() dto: UpdateRestaurantDto,
    @GetUserId() userId: string,
    @GetUserRole() userRole: Role
  ) {
    return this.restaurantService.updateRestaurant(id, dto, userId, userRole);
  }

  @Get(':id')
  async getRestaurant(@Param('id') id: string) {
    return this.restaurantService.getRestaurantById(id);
  }
}
