import {Module} from '@nestjs/common';
import {PlaceService} from './place.service';
import {HttpModule} from "@nestjs/axios";
import {PlaceController} from "~/place/place.controller";
import {CacheModule} from '@nestjs/cache-manager';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: 60 * 60 * 6, // 6 hours
      max: 1000,
    })
  ],
  providers: [PlaceService],
  controllers: [PlaceController],
  exports: [PlaceService],
})
export class PlaceModule {
}
