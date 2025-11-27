import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetUserId, Public } from '~/common/decorators';
import {
  CreateMenuItemDto,
  SearchMenuItemsDto,
} from '~/menu/dto/menu.dto';
import { MenuService } from '~/menu/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/item')
  async createMenuItem(@Body() dto: CreateMenuItemDto) {
    return this.menuService.createMenuItem(dto);
  }

  @Public()
  @Get('/filters')
  async getFilters(@Query('is-selectable') isSelectable: string) {
    return this.menuService.getFilters(isSelectable);
  }

  @Get('/discovery')
  async getDiscovery(@GetUserId() userId: string) {
    return this.menuService.getDiscovery(userId);
  }

  @Get('/search')
  async search(@Query() dto: SearchMenuItemsDto) {
    return this.menuService.search(dto);
  }

  // @Public()
  // @Get('/by-tag')
  // async getByTag(@Query() dto: SearchMenuItemsDto,) {
  //   return this.menuService.getItemsBySlug(dto)
  // }
}
