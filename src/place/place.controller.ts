import {Body, Controller, Get, Post} from "@nestjs/common";
import {Public} from "~/common/decorators";
import {PlaceService} from "~/place/place.service";
import {GetGoogleRatingDto} from "~/place/dto/place.dto";

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Public()
  @Get()
  async get() {
    return this.placeService.geocode(
      'Pitfire Pizza, Dubai Hills Estate',
      'Dubai',
      'UAE'
    )
  }

  @Public()
  @Post('/reviews')
  async getRatings(@Body() dto: GetGoogleRatingDto) {
    return this.placeService.getPlacesRating(dto.placeIds)
  }
}
