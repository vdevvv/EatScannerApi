import { IsNotEmpty, IsString, MinLength } from 'class-validator';

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
