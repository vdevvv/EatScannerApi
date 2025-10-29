import { Controller, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserId } from '~/common/decorators';

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
}
