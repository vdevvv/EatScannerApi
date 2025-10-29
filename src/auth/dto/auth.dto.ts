import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { VerificationType } from '@prisma/client';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 30)
  password: string;

  @IsString()
  @Length(2, 30)
  firstName: string;

  @IsString()
  @Length(2, 30)
  lastName: string;

  @IsOptional()
  @IsPhoneNumber()
  phone: string;
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
  @IsString()
  userId: string;

  @IsString()
  code: string;

  @IsEnum(VerificationType)
  type: VerificationType;
}

export class ResendVerifyCodeDto {
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

export class ResetPasswordDto {
  @IsString()
  userId: string;

  @IsString()
  code: string;

  @IsString()
  @Length(6, 30)
  newPassword: string;
}

export class RefreshTokenDto {
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
