import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Patch,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  UpdatePasswordDto,
  UpdatePushTokenDto,
  UpdateUserDto,
} from '~/user/dto/user.dto';
import { GetUserId } from '~/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('/me')
  async getMe(@GetUserId() userId: string) {
    return this.usersService.findById(userId);
  }

  @Patch('/me')
  async updateMe(@GetUserId() userId: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(userId, dto);
  }

  @Patch('/avatar')
  @UseInterceptors(FileInterceptor('file'))
  async updateAvatar(
    @GetUserId() userId: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({maxSize: MAX_FILE_SIZE}),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|webp)' }),
        ]
      })
    ) file: Express.Multer.File,
  ) {
    return this.usersService.updateAvatar(userId, file)
  }

  @Delete('/avatar')
  async deleteAvatar(@GetUserId() userId: string) {
    return this.usersService.deleteAvatar(userId);
  }

  @Patch('/password')
  async updatePassword(
    @GetUserId() userId: string,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.usersService.updatePassword(userId, dto);
  }

  @Get('/my-stats')
  async getMyStats(
    @GetUserId() userId: string,
  ) {
    return this.usersService.getStats(userId);
  }

  @Get('/badges/my')
  async getMyBadges(@GetUserId() userId: string) {
    return this.usersService.getUserBadges(userId);
  }

  @Get('/badges/:userId')
  async getUserBadge(@Param('userId') userId: string) {
    return this.usersService.getUserBadges(userId);
  }

  @Get('/:id/stats')
  async getUserStats(@Param('id') userId: string) {
    return this.usersService.getStats(userId);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.usersService.findById(id);
  }

  @Patch('push-token')
  async updatePushToken(
    @GetUserId() userId: string,
    @Body() dto: UpdatePushTokenDto,
  ) {
    return this.usersService.updatePushToken(userId, dto.expoPushToken);
  }
}
