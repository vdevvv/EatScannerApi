import {BadGatewayException, BadRequestException, Injectable, Logger, LoggerService} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {catchError, firstValueFrom} from "rxjs";
import {AxiosError} from "axios";
import {GeocodingResponse} from "~/geocoding/types/geocoding.types";

@Injectable()
export class GeocodingService {
  private readonly logger = new Logger(GeocodingService.name);
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async geocode(address: string, city: string, country: string) {
    const query = `${address}, ${city}, ${country}`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      query
    )}&format=json&limit=1`;

    const {data} = await firstValueFrom(
      this.httpService.get<GeocodingResponse>(url, {headers: {"User-Agent": "EatScanner"}}).pipe(
        catchError((error: AxiosError) => {
          if (error.response) {
            this.logger.error(error.response.data);
          }
          throw new BadGatewayException()
        })
      )
    )

    if (!data || data.length === 0) {
      throw new BadRequestException("Cannot geocode this address");
    }

    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon)
    };
  }
}
