import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserId } from '~/common/decorators';
import { UpdatePasswordDto, UpdateUserDto } from '~/user/dto/user.dto';

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

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.usersService.findById(id);
  }

  @Patch('/me')
  async updateMe(@GetUserId() userId: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(userId, dto);
  }

  @Patch('/avatar')
  async updateAvatar(
    @GetUserId() userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {}

  @Delete('/avatar')
  async deleteAvatar(@GetUserId() userId: string) {
    return this.usersService.deleteAvatar(userId);
  }

  @Patch('/password')
  async updatePassword(
    @GetUserId() userId: string,
    @Body() dto: UpdatePasswordDto
  ) {
    return this.usersService.updatePassword(userId, dto)
  }
}
