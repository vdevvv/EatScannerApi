import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SavedService } from './saved.service';
import { GetUserId } from '~/common/decorators';
import { PageOptionsDto } from '~/common/dto/page';

@Controller('saved')
export class SavedController {
  constructor(private readonly savedService: SavedService) {}

  @Post(':itemId')
  async toggleSaved(
    @GetUserId() userId: string,
    @Param('itemId') itemId: string,
  ) {
    return this.savedService.toggle(userId, itemId);
  }

  @Get()
  async getMySaved(
    @GetUserId() userId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.savedService.getMySaved(userId, pageOptionsDto);
  }

  @Get(':targetUserId')
  async getUserSaved(
    @Param('targetUserId') targetUserId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.savedService.getMySaved(targetUserId, pageOptionsDto);
  }
}
