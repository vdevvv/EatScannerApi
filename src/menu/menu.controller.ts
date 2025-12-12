import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GetUserId, Public } from '~/common/decorators';
import { CreateMenuItemDto, SearchMenuItemsDto } from '~/menu/dto/menu.dto';
import { MenuService } from '~/menu/menu.service';
import { Roles } from '~/common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Roles(Role.ADMIN)
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
  async search(@GetUserId() userId: string, @Query() dto: SearchMenuItemsDto) {
    return this.menuService.search(userId, dto);
  }

  @Get('/item/:id')
  async getMenuItemById(@Param('id') id: string) {
    return this.menuService.getMenuItemById(id);
  }

  @Get('/categories/:restaurantId')
  async getCategories(@Param('restaurantId') restaurantId: string) {
    return this.menuService.getCategories(restaurantId)
  }
}
