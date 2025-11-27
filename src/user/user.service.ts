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

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

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

  async deleteAvatar(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { avatar: DEFAULT_AVATAR },
    });

    return { status: true };
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
}
