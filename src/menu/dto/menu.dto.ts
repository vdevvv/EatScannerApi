import {IsNumber, IsOptional, IsString, IsUrl} from "class-validator";
import {PartialType} from "@nestjs/mapped-types";

export class CreateMenuItemDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsUrl()
  image: string;

  @IsString()
  categoryId: string;
}


export class UpdateMenuItemDto extends PartialType(CreateMenuItemDto) {
}