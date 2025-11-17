import {BadGatewayException, Inject, Injectable, Logger} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {catchError, firstValueFrom} from "rxjs";
import {AxiosError} from "axios";
import {GooglePlaceResponse, GoogleRating, GoogleRatingResponse} from "~/place/types/place.types";
import {ConfigService} from "@nestjs/config";
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import {Cache} from 'cache-manager';

@Injectable()
export class PlaceService {
  private readonly logger = new Logger(PlaceService.name);

  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
  }

  async geocode(address: string, city: string, country: string) {
    const query = `${address}, ${city}, ${country}`;
    const params = new URLSearchParams({
      input: query,
      inputtype: 'textquery',
      fields: 'place_id,name,geometry,rating,user_ratings_total',
      key: this.configService.getOrThrow<string>('GOOGLE_PLACE_API_KEY')
    });

    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?${params}`;

    const {data} = await firstValueFrom(
      this.httpService.get<GooglePlaceResponse>(url).pipe(
        catchError((error: AxiosError) => {
          if (error.response) {
            this.logger.error(error.response.data);
          }
          throw new BadGatewayException()
        })
      )
    )

    if (!data || data.candidates.length === 0) {
      throw new BadGatewayException("Cannot geocode this address");
    }

    const candidate = data.candidates[0]

    if (!candidate.geometry || !candidate.geometry.location) {
      throw new BadGatewayException("Invalid geometry data from place service");
    }

    return {
      latitude: candidate.geometry.location.lat,
      longitude: candidate.geometry.location.lng,
      placeId: candidate.place_id,
      rating: candidate.rating
    };
  }

  async getPlacesRating(placeIds: string[]) {
    const results: Record<string, GoogleRating | null> = {};
    const toFetch: string[] = [];

    for (const id of placeIds) {
      const cached = await this.cache.get<GoogleRating>(`google-rating:${id}`);
      if (cached !== undefined) {
        results[id] = cached;
      } else {
        toFetch.push(id);
      }
    }

    if (toFetch.length === 0) return results;

    const apiKey = this.configService.getOrThrow<string>('GOOGLE_PLACE_API_KEY')

    const requests = toFetch.map(id => {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,user_ratings_total&key=${apiKey}`
      return firstValueFrom(
        this.httpService.get<GoogleRatingResponse>(url).pipe(
          catchError((error: AxiosError) => {
            if (error.response) {
              this.logger.error(error.response.data);
            }
            throw new BadGatewayException()
          })
        )
      ).then(resp => ({id, resp}));
    })

    const responses = await Promise.allSettled(requests);

    for (const r of responses) {
      if (r.status === 'fulfilled') {
        const {id, resp} = r.value;
        const value = resp?.data?.result ?? null;

        results[id] = value;
        await this.cache.set(`google-rating:${id}`, value);
      }
    }

    return results;
  }
}

