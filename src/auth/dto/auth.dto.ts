import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { VerificationType } from '@prisma/client';

export class RequestEmailVerificationDto {
  @IsEmail()
  email: string;
}

export class SetPasswordDto {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsString()
  @Length(8, 100)
  password: string;

  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  selectedAllergies: string[];
}

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class VerifyCodeDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsEnum(VerificationType)
  type: VerificationType;
}

export class ResendVerifyCodeDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsEnum(VerificationType)
  type: VerificationType;
}

export class ForgotPasswordDto {
  @IsString()
  @IsNotEmpty()
  email: string;
}

export class RefreshTokenDto {
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
