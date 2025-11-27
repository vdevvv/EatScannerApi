import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { PageOptionsDto } from '~/common/dto/page';

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

export class UpdateMenuItemDto extends PartialType(CreateMenuItemDto) {}

export class SearchMenuItemsDto extends PageOptionsDto {
  @IsOptional()
  @IsString()
  query?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => Array.isArray(value) ? value : [value])
  tags?: string[];
}
