import {Body, Controller, Get, Post} from "@nestjs/common";
import {Public} from "~/common/decorators";
import {PlaceService} from "~/place/place.service";
import {GetGoogleRatingDto} from "~/place/dto/place.dto";

@Controller('place')
export class PlaceController {
  constructor(private readonly geocodeService: PlaceService) {}

  @Public()
  @Get()
  async get() {
    return this.geocodeService.geocode(
      'Pitfire Pizza, Dubai Hills Estate',
      'Dubai',
      'UAE'
    )
  }

  @Public()
  @Post()
  async getRatings(@Body() dto: GetGoogleRatingDto) {
    return this.geocodeService.getPlacesRating(dto.placeIds)
  }
}
