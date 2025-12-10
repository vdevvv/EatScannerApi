import { Controller, Get, Query } from '@nestjs/common';
import { RestaurantService } from '~/restaurant/restaurant.service';
import { PageOptionsDto } from '~/common/dto/page';

@Controller('admin/restaurants')
export class AdminRestaurantsController {
  constructor(private readonly restaurantService: RestaurantService) {
  }

  @Get()
  async getRestaurants(@Query() pageOptionsDto: PageOptionsDto) {
    return this.restaurantService.getRestaurantsForAdmin(pageOptionsDto);
  }
}