import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { PageOptionsDto } from '~/common/dto/page';

import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUrl,
  IsEnum,
  IsBoolean,
  IsArray,
  IsUUID,
  Min,
  ValidateIf,
} from 'class-validator';
import { DishBadge } from '@prisma/client';

export class CreateMenuItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsUrl()
  image: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  video?: string;

  @IsUUID()
  @IsNotEmpty()
  restaurantId: string;

  @IsBoolean()
  @IsOptional()
  isNewCategory?: boolean;

  @ValidateIf((o) => !o.isNewCategory)
  @IsUUID()
  categoryId?: string;

  @ValidateIf((o) => o.isNewCategory)
  @IsString()
  @IsNotEmpty()
  newCategoryName?: string;

  @IsArray()
  @IsEnum(DishBadge, { each: true })
  @IsOptional()
  badges?: DishBadge[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  tagIds?: string[];
}

export class UpdateMenuItemDto extends PartialType(CreateMenuItemDto) {}

export class SearchMenuItemsDto extends PageOptionsDto {
  @IsOptional()
  @IsString()
  query?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  tags?: string[];
}
