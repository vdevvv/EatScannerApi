import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  CompleteRegistrationDto,
  ForgotPasswordDto,
  LoginDto,
  RefreshTokenDto,
  RequestEmailVerificationDto,
  ResendVerifyCodeDto,
  ResetPasswordDto,
  VerifyCodeDto,
} from './dto/auth.dto';
import { GetUserId, Public } from '~/common/decorators';
import { RtGuard } from '~/common/guards';
import { UserService } from '~/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Post('request-email-verification')
  @HttpCode(HttpStatus.OK)
  async requestEmailVerification(@Body() dto: RequestEmailVerificationDto) {
    return this.authService.requestEmailVerification(dto);
  }

  @Public()
  @Post('complete-registration')
  @HttpCode(HttpStatus.OK)
  async completeRegistration(@Body() dto: CompleteRegistrationDto) {
    return this.authService.completeRegistration(dto);
  }

  @Public()
  @Post('verify-code')
  @HttpCode(HttpStatus.OK)
  async verifyCode(@Body() verifyCodeDto: VerifyCodeDto) {
    return this.authService.verifyCode(verifyCodeDto);
  }

  @Public()
  @Post('resend-verify-code')
  @HttpCode(HttpStatus.OK)
  async resendVerifyCode(@Body() verifyCodeDto: ResendVerifyCodeDto) {
    await this.userService.checkIfUserExists(verifyCodeDto.userId);
    await this.authService.sendVerificationCode(
      verifyCodeDto.userId,
      verifyCodeDto.type,
    );

    return { message: 'The confirmation email has been sent' };
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return await this.authService.forgotPassword(forgotPasswordDto);
  }

  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return await this.authService.resetPassword(resetPasswordDto);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh-token')
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @Body() refreshTokenDto: RefreshTokenDto,
    @GetUserId() userId: string,
  ) {
    return await this.authService.refreshToken(
      userId,
      refreshTokenDto.refreshToken,
    );
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@GetUserId() userId: string) {
    return await this.authService.logout(userId);
  }
}
