import { Controller, Get, Query } from '@nestjs/common';
import { RestaurantService } from '~/restaurant/restaurant.service';
import { PageOptionsDto } from '~/common/dto/page';
import {GetUserId} from "~/common/decorators";
import {GetUserRole} from "~/common/decorators/get-role.decorator";
import {Role} from "@prisma/client";

@Controller('admin/restaurants')
export class AdminRestaurantsController {
  constructor(private readonly restaurantService: RestaurantService) {
  }

  @Get()
  async getRestaurants(
    @Query() pageOptionsDto: PageOptionsDto,
    @GetUserId() userId: string,
    @GetUserRole() userRole: Role
  ) {
    return this.restaurantService.getRestaurantsForAdmin(userId, userRole, pageOptionsDto);
  }
}