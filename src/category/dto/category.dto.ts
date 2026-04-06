import {IsString, IsUUID} from "class-validator";

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsUUID()
  menuId: string;
}

export class UpdateCategoryDto {
  @IsString()
  name: string;
}
