import {ArrayNotEmpty, IsArray, IsString} from "class-validator";

export class CreateRestaurantDto {
  @IsString()
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({each: true})
  videos: string[];

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  address: string;
}