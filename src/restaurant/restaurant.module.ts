import {Module} from '@nestjs/common';
import {RestaurantService} from './restaurant.service';
import {RestaurantController} from './restaurant.controller';
import {PlaceModule} from "~/place/place.module";

@Module({
  imports: [PlaceModule],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {
}
