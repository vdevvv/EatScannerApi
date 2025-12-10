import {Module} from '@nestjs/common';
import {MenuController} from './menu.controller';
import {MenuService} from "~/menu/menu.service";
import { PlaceModule } from '~/place/place.module';

@Module({
  imports: [PlaceModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {
}
