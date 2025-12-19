import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import { UpdatePasswordDto, UpdateUserDto } from '~/user/dto/user.dto';
import { DEFAULT_AVATAR } from '~/common/constants/images';
import * as bcrypt from 'bcryptjs';
import { CloudinaryService } from '~/cloudinary/cloudinary.service';
import { UserOrderStats } from '~/user/types/user.types';
import { DishBadge, RestaurantType } from '@prisma/client';
import * as Twilio from 'twilio';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  private twilioClient: Twilio.Twilio;

  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly config: ConfigService,
  ) {
    this.twilioClient = Twilio(
      this.config.getOrThrow('TWILIO_ACCOUNT_SID'),
      this.config.getOrThrow('TWILIO_AUTH_TOKEN'),
    );
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      omit: {
        hashedRt: true,
        hashedPassword: true,
      },
    });
  }

  async checkIfUserExists(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
  }

  async update(userId: string, dto: UpdateUserDto) {
    if (dto.userName) {
      const existing = await this.prisma.user.findUnique({
        where: { userName: dto.userName },
      });

      if (existing && existing.id !== userId) {
        throw new ConflictException('Username is already taken');
      }
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: { ...dto },
      omit: {
        hashedRt: true,
        hashedPassword: true,
      },
    });
  }

  async updateAvatar(userId: string, avatar: Express.Multer.File) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const uploadResult = await this.cloudinaryService.uploadFile(
      avatar,
      'avatars',
    );
    if (!uploadResult.public_id) {
      throw new BadRequestException('Image upload failed');
    }

    if (user.avatar && user.avatar !== DEFAULT_AVATAR) {
      if (user.avatarPublicId) {
        await this.cloudinaryService.deleteFile(user.avatarPublicId);
      }
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        avatar: uploadResult.secure_url,
        avatarPublicId: uploadResult.public_id,
      },
      omit: {
        hashedRt: true,
        hashedPassword: true,
      },
    });
  }

  async deleteAvatar(userId: string) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { avatar: DEFAULT_AVATAR },
      omit: {
        hashedRt: true,
        hashedPassword: true,
      },
    });

    if (user.avatar && user.avatar !== DEFAULT_AVATAR) {
      if (user.avatarPublicId) {
        await this.cloudinaryService.deleteFile(user.avatarPublicId);
      }
    }

    return user;
  }

  async updatePassword(userId: string, dto: UpdatePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { hashedPassword: true },
    });

    if (!user || !user.hashedPassword) {
      throw new NotFoundException('User not found');
    }

    const isPasswordMatches = await bcrypt.compare(
      dto.oldPassword,
      user.hashedPassword,
    );

    if (!isPasswordMatches) {
      throw new BadRequestException('Old password is incorrect');
    }

    const newHashedPassword = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedPassword: newHashedPassword },
    });

    return { message: 'Password updated successfully' };
  }

  async getStats(userId: string) {
    const [friendsCount, savedCount, favoritesCount] = await Promise.all([
      this.prisma.friendship.count({
        where: {
          status: 'ACCEPTED',
          OR: [{ requesterId: userId }, { receiverId: userId }],
        },
      }),
      this.prisma.savedItem.count({
        where: { userId },
      }),
      this.prisma.favorite.count({
        where: { userId },
      }),
    ]);

    return { friendsCount, savedCount, favoritesCount };
  }

  async updatePushToken(userId: string, pushToken: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { pushToken },
    });
  }

  async getUserBadges(userId: string) {
    const statsRaw = await this.prisma.$queryRaw<UserOrderStats[]>`
      SELECT
        COUNT(*)::int as totalOrders,
        COUNT(*) FILTER (WHERE ${DishBadge.SPICY}::"DishBadge" = ANY(badges_snapshot))::int as "spicyCount",
        COUNT(*) FILTER (WHERE ${DishBadge.DESSERT}::"DishBadge" = ANY(badges_snapshot))::int as "dessertCount",
        COUNT(*) FILTER (WHERE ${DishBadge.HEALTHY}::"DishBadge" = ANY(badges_snapshot))::int as "healthyCount",
        
        COUNT(*) FILTER (WHERE venue_type_snapshot = ${RestaurantType.CAFE}::"RestaurantType")::int as "cafeOrdersCount",
        COUNT(DISTINCT restaurant_id) FILTER (WHERE venue_type_snapshot = ${RestaurantType.CAFE}::"RestaurantType")::int as "distinctCafesCount"
      
      FROM orders 
      WHERE user_id = ${userId}
        AND created_at >= NOW() - INTERVAL '90 days'
    `;

    const stats = statsRaw[0] || {
      totalOrders: 0,
      spicyCount: 0,
      dessertCount: 0,
      healthyCount: 0,
      cafeOrdersCount: 0,
      distinctCafesCount: 0,
    };

    const total = stats.totalOrders;
    if (total === 0) return [];

    const earnedBadges: Array<{
      text: string;
      emoji: string;
      color1: string;
      color2: string;
    }> = [];

    if (stats.spicyCount >= 10 || stats.spicyCount / total >= 0.25) {
      earnedBadges.push({
        emoji: '🌶️',
        text: 'Spice Lord',
        color1: '#CF0000',
        color2: 'rgba(207,0,0,0.2)',
      });
    }

    if (stats.cafeOrdersCount >= 8 && stats.distinctCafesCount >= 3) {
      earnedBadges.push({
        emoji: '☕️',
        text: 'Café Connoisseur',
        color1: '#E17C00',
        color2: 'rgba(225,124,0,0.2)',
      });
    }

    if (stats.dessertCount >= 8 || stats.dessertCount / total >= 0.3) {
      earnedBadges.push({
        emoji: '🍰',
        text: 'Sweet Tooth',
        color1: '#F31994',
        color2: 'rgba(243,25,148,0.2)',
      });
    }

    if (stats.healthyCount >= 10 && stats.healthyCount / total >= 0.4) {
      earnedBadges.push({
        emoji: '🥬',
        text: 'Healthy Hustler',
        color1: '#08DE00',
        color2: 'rgba(8,222,0,0.2)',
      });
    }

    return earnedBadges;
  }

  async initiatePhoneChange(userId: string, newPhone: string) {
    const existingUser = await this.prisma.user.findFirst({
      where: { phone: newPhone },
    });

    if (existingUser) {
      throw new ConflictException('Phone number is already in use');
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await this.prisma.verificationCode.create({
      data: {
        userId,
        code,
        type: 'phone_verification',
        payload: newPhone,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      },
    });

    try {
      await this.twilioClient.messages.create({
        body: `Your verification code is: ${code}`,
        from: this.config.getOrThrow('TWILIO_PHONE_NUMBER'),
        to: newPhone,
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Failed to send SMS');
    }

    return { message: 'Verification code sent' };
  }

  async confirmPhoneChange(userId: string, code: string) {
    const verificationRecord = await this.prisma.verificationCode.findFirst({
      where: {
        userId,
        code,
        type: 'phone_verification',
        expiresAt: { gt: new Date() },
      },
    });

    if (!verificationRecord || !verificationRecord.payload) {
      throw new BadRequestException('Invalid or expired code');
    }

    const newPhone = verificationRecord.payload;

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { phone: newPhone },
      omit: {
        hashedRt: true,
        hashedPassword: true,
      },
    });

    await this.prisma.verificationCode.delete({
      where: { id: verificationRecord.id },
    });

    return updatedUser;
  }

  async toggleNotifications(userId: string, notificationsEnabled: boolean) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        notificationsEnabled,
      },
      omit: {
        hashedRt: true,
        hashedPassword: true,
      },
    });
  }
}
