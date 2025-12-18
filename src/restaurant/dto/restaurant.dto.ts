import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { PageOptionsDto } from '~/common/dto/page';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRestaurantDto {
  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsOptional()
  @IsUrl()
  careemUrl?: string;

  @IsOptional()
  @IsUrl()
  noonFoodUrl?: string;

  @IsOptional()
  @IsUrl()
  talabatUrl?: string;

  @IsOptional()
  @IsUrl()
  keetaUrl?: string;

  @IsOptional()
  @IsUrl()
  deliverooUrl?: string;
}

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {}

export class GetRestaurantsDto extends PageOptionsDto {
  @Type(() => Number)
  @IsNumber()
  latitude: number;

  @Type(() => Number)
  @IsNumber()
  longitude: number;
}
