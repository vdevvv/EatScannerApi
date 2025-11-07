import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {RestaurantService} from './restaurant.service';
import {CreateRestaurantDto} from "~/restaurant/dto/restaurant.dto";
import {PageOptionsDto} from "~/common/dto/page";

@Controller('restaurants')
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService,
  ) {}

  @Post()
  async createRestaurant(
    @Body() dto: CreateRestaurantDto
  ) {
    return this.restaurantService.createRestaurant(dto);
  }

  @Get()
  async getRestaurants(@Query() pageOptionsDto: PageOptionsDto) {
    return this.restaurantService.getRestaurants(pageOptionsDto);
  }

  @Get(':id/menu')
  getMenu(@Param('id') id: string) {
    return this.restaurantService.getMenu(id);
  }

}
