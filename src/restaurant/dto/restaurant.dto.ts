import { IsNumber, IsString } from 'class-validator';
import { PageOptionsDto } from '~/common/dto/page';
import { Type } from 'class-transformer';

export class CreateRestaurantDto {
  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  address: string;
}

export class GetRestaurantsDto extends PageOptionsDto {
  @Type(() => Number)
  @IsNumber()
  latitude: number;

  @Type(() => Number)
  @IsNumber()
  longitude: number;
}
