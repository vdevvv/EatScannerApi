import {ArrayMaxSize, IsArray, IsString} from "class-validator";

export class GetGoogleRatingDto {
  @IsArray()
  @ArrayMaxSize(10)
  @IsString({each: true})
  placeIds: string[];
}