import { Injectable, Inject, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import { eq, and, gt } from 'drizzle-orm';
import * as bcrypt from 'bcryptjs';
import { users, verificationCodes, refreshTokens } from '../database/schema';
import { db } from '../database/connection';
import { AuthJwtService } from './jwt.service';
import { EmailService } from './email.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly database: typeof db,
    private readonly jwtService: AuthJwtService,
    private readonly emailService: EmailService,
  ) {}

  async register(registerDto: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }) {
    // Check if user already exists by email
    const existingUserByEmail = await this.database
      .select()
      .from(users)
      .where(eq(users.email, registerDto.email))
      .limit(1);

    if (existingUserByEmail.length > 0) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Create user
    const newUser = await this.database
      .insert(users)
      .values({
        email: registerDto.email,
        password: hashedPassword,
        firstName: registerDto.firstName,
        lastName: registerDto.lastName,
        phone: registerDto.phone,
        isEmailVerified: false,
      })
      .returning();

    // Generate and send verification code
    await this.sendVerificationCode(newUser[0].id, 'email_verification');

    return {
      message: 'User registered successfully. Please verify your email.',
      userId: newUser[0].id,
    };
  }

  async verifyCode(verifyCodeDto: {
    userId: string;
    code: string;
    type: 'email_verification' | 'password_reset';
  }) {
    // Find verification code
    const verificationCode = await this.database
      .select()
      .from(verificationCodes)
      .where(
        and(
          eq(verificationCodes.userId, verifyCodeDto.userId),
          eq(verificationCodes.code, verifyCodeDto.code),
          eq(verificationCodes.type, verifyCodeDto.type),
          eq(verificationCodes.isUsed, false),
          gt(verificationCodes.expiresAt, new Date())
        )
      )
      .limit(1);

    if (verificationCode.length === 0) {
      throw new BadRequestException('Invalid or expired verification code');
    }

    // Mark code as used
    await this.database
      .update(verificationCodes)
      .set({ isUsed: true })
      .where(eq(verificationCodes.id, verificationCode[0].id));

    // If email verification, mark user as verified
    if (verifyCodeDto.type === 'email_verification') {
      await this.database
        .update(users)
        .set({ isEmailVerified: true })
        .where(eq(users.id, verifyCodeDto.userId));
    }

    return {
      message: 'Code verified successfully',
      verified: true,
    };
  }

  async login(loginDto: { email: string; password: string }) {
    // Find user
    const user = await this.database
      .select()
      .from(users)
      .where(eq(users.email, loginDto.email))
      .limit(1);

    if (user.length === 0) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if email is verified
    if (!user[0].isEmailVerified) {
      throw new UnauthorizedException('Please verify your email before logging in');
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(loginDto.password, user[0].password!);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate tokens
    const accessToken = this.jwtService.generateAccessToken({
      userId: user[0].id,
      email: user[0].email,
    });

    const refreshToken = this.jwtService.generateRefreshToken({
      userId: user[0].id,
      email: user[0].email,
    });

    // Store refresh token
    await this.database
      .insert(refreshTokens)
      .values({
        userId: user[0].id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user[0].id,
        email: user[0].email,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        isEmailVerified: user[0].isEmailVerified,
      },
    };
  }

  async forgotPassword(forgotPasswordDto: { email: string }) {
    // Find user
    const user = await this.database
      .select()
      .from(users)
      .where(eq(users.email, forgotPasswordDto.email))
      .limit(1);

    if (user.length === 0) {
      // Don't reveal if email exists or not for security
      return {
        message: 'If the email exists, a password reset code has been sent',
      };
    }

    // Generate and send verification code
    await this.sendVerificationCode(user[0].id, 'password_reset');

    return {
      message: 'If the email exists, a password reset code has been sent',
    };
  }

  async resetPassword(resetPasswordDto: {
    userId: string;
    code: string;
    newPassword: string;
  }) {
    // Verify the code first
    await this.verifyCode({
      userId: resetPasswordDto.userId,
      code: resetPasswordDto.code,
      type: 'password_reset',
    });

    // Hash new password
    const hashedPassword = await bcrypt.hash(resetPasswordDto.newPassword, 10);

    // Update password
    await this.database
      .update(users)
      .set({ password: hashedPassword })
      .where(eq(users.id, resetPasswordDto.userId));

    return {
      message: 'Password reset successfully',
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      // Verify refresh token
      const payload = this.jwtService.verifyRefreshToken(refreshToken);

      // Check if token exists in database and is not revoked
      const tokenRecord = await this.database
        .select()
        .from(refreshTokens)
        .where(
          and(
            eq(refreshTokens.token, refreshToken),
            eq(refreshTokens.isRevoked, false),
            gt(refreshTokens.expiresAt, new Date())
          )
        )
        .limit(1);

      if (tokenRecord.length === 0) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Generate new access token
      const newAccessToken = this.jwtService.generateAccessToken({
        userId: payload.userId,
        email: payload.email,
      });

      return {
        accessToken: newAccessToken,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(refreshToken: string) {
    // Revoke refresh token
    await this.database
      .update(refreshTokens)
      .set({ isRevoked: true })
      .where(eq(refreshTokens.token, refreshToken));

    return {
      message: 'Logged out successfully',
    };
  }

  private async sendVerificationCode(userId: string, type: 'email_verification' | 'password_reset') {
    // Generate 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // Store verification code
    await this.database
      .insert(verificationCodes)
      .values({
        userId,
        code,
        type,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
      });

    // Get user email
    const user = await this.database
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (user.length > 0) {
      await this.emailService.sendVerificationCode(user[0].email, code, type);
    }
  }
}
