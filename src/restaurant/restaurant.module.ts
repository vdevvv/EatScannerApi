import {Module} from '@nestjs/common';
import {RestaurantService} from './restaurant.service';
import {RestaurantController} from './restaurant.controller';
import {PlaceModule} from "~/place/place.module";
import { AdminRestaurantsController } from '~/restaurant/restaurant-admin.controller';

@Module({
  imports: [PlaceModule],
  controllers: [RestaurantController, AdminRestaurantsController],
  providers: [RestaurantService],
})
export class RestaurantModule {
}
