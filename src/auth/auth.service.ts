import {
  Injectable,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthJwtService } from './jwt.service';
import { EmailService } from './email.service';
import {
  CompleteRegistrationDto,
  ForgotPasswordDto,
  LoginDto,
  RequestEmailVerificationDto,
  ResetPasswordDto,
  VerifyCodeDto,
} from './dto/auth.dto';
import { PrismaService } from '~/prisma/prisma.service';
import { VerificationType } from '@prisma/client';
import { generateRandomToken } from '~/common/utils/random-token';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: AuthJwtService,
    private readonly emailService: EmailService,
    private readonly prisma: PrismaService,
  ) {}

  async requestEmailVerification(dto: RequestEmailVerificationDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('User with this email already exists');
    }

    const tempUser = await this.prisma.user.create({
      data: { email: dto.email },
    });

    await this.sendVerificationCode(tempUser.id, 'email_verification');

    return { message: 'Verification code sent to email', userId: tempUser.id };
  }

  async verifyCode(verifyCodeDto: VerifyCodeDto) {
    const verificationCode = await this.prisma.verificationCode.findFirst({
      where: {
        userId: verifyCodeDto.userId,
        code: verifyCodeDto.code,
        type: verifyCodeDto.type,
        isUsed: false,
        expiresAt: { gt: new Date() },
      },
    });

    if (!verificationCode) {
      throw new BadRequestException('Invalid or expired verification code');
    }

    await this.prisma.verificationCode.update({
      where: { id: verificationCode.id },
      data: { isUsed: true },
    });

    if (verifyCodeDto.type === VerificationType.email_verification) {
      await this.prisma.user.update({
        where: { id: verifyCodeDto.userId },
        data: { isEmailVerified: true },
      });

      const { token, expiresAt } = generateRandomToken();
      await this.prisma.emailVerificationToken.create({
        data: {
          userId: verifyCodeDto.userId,
          token,
          expiresAt,
        },
      });

      return { message: 'Code verified', token };
    }

    return { message: 'Code verified successfully', verified: true };
  }

  async completeRegistration(dto: CompleteRegistrationDto) {
    const tokenRecord = await this.prisma.emailVerificationToken.findUnique({
      where: { token: dto.token },
      include: {
        user: true,
      },
    });

    if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
      throw new BadRequestException('Invalid or expired registration token');
    }

    const user = tokenRecord.user;
    if (!user || !user.isEmailVerified) {
      throw new BadRequestException('Email not verified');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: { hashedPassword },
    });

    await this.prisma.emailVerificationToken.delete({
      where: { token: dto.token },
    });

    return { message: 'Registration complete', userId: updatedUser.id };
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });

    if (!user || !user.hashedPassword) {
      throw new ForbiddenException('Wrong email or password');
    }

    const isPasswordMatches = await bcrypt.compare(
      loginDto.password,
      user.hashedPassword,
    );

    if (!isPasswordMatches) {
      throw new ForbiddenException('Wrong email or password');
    }

    if (!user.isEmailVerified) {
      throw new ForbiddenException(
        'Please verify your email before logging in',
      );
    }

    const { accessToken, refreshToken } = await this.jwtService.signTokens({
      userId: user.id,
      email: user.email,
    });

    await this.updateRt(user.id, refreshToken);
    return { accessToken, refreshToken };
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: forgotPasswordDto.email },
    });

    if (!user) throw new NotFoundException('User not found');

    await this.sendVerificationCode(user.id, VerificationType.password_reset);
    return { message: 'Password reset code has been sent' };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    await this.verifyCode({
      userId: resetPasswordDto.userId,
      code: resetPasswordDto.code,
      type: VerificationType.password_reset,
    });

    const hashedPassword = await bcrypt.hash(resetPasswordDto.newPassword, 10);
    await this.prisma.user.update({
      where: { id: resetPasswordDto.userId },
      data: { hashedPassword },
    });

    return { message: 'Password reset successfully' };
  }

  async refreshToken(userId: string, refreshToken: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user?.hashedRt) throw new NotFoundException('Token not found ');

    const rtMatches = await bcrypt.compare(refreshToken, user.hashedRt);
    if (!rtMatches) throw new ForbiddenException('Wrong token');

    const tokens = await this.jwtService.signTokens({
      email: user.email,
      userId: user.id,
    });

    await this.updateRt(user.id, tokens.refreshToken);
    return tokens;
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRt: null },
    });

    return { message: 'Logged out successfully' };
  }

  async sendVerificationCode(userId: string, type: VerificationType) {
    const code = Math.floor(10000 + Math.random() * 90000).toString();
    const createdCode = await this.prisma.verificationCode.create({
      data: {
        userId,
        code,
        type,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 min
      },
      include: { user: { select: { email: true } } },
    });

    await this.emailService.sendVerificationCode(
      createdCode.user.email,
      code,
      type,
    );
  }

  private async updateRt(userId: string, rt: string) {
    const hashedRt = await bcrypt.hash(rt, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRt },
    });
  }
}
