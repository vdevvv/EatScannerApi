import {
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  @Length(4, 12)
  @Matches(/^[a-zA-Z0-9_]+$/, {
    message: "Username може can contain only letters, numbers, and _ underscore",
  })
  userName?: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber()
  phone?: string;
}

export class UpdatePasswordDto {
  @IsString()
  oldPassword: string;

  @IsString()
  @Length(8, 100)
  newPassword: string;
}

export class UpdatePushTokenDto {
  @IsString()
  expoPushToken: string;
}

export class UpdatePhoneDto {
  @IsPhoneNumber()
  phone: string;
}

export class ConfirmPhoneChangeDto {
  @IsString()
  code: string
}