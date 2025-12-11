import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { GetUserId } from '~/common/decorators';
import { PageOptionsDto } from '~/common/dto/page';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':itemId')
  async toggleFavorite(
    @GetUserId() userId: string,
    @Param('itemId') itemId: string,
  ) {
    return this.favoritesService.toggle(userId, itemId);
  }

  @Get()
  async getMyFavorites(
    @GetUserId() userId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.favoritesService.getMyFavorites(userId, pageOptionsDto);
  }

  @Get(':targetUserId')
  async getUserFavorites(
    @Param('targetUserId') targetUserId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.favoritesService.getMyFavorites(targetUserId, pageOptionsDto);
  }
}
