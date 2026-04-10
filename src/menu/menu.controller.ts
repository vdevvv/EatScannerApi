import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GetUserId, Public } from '~/common/decorators';
import {
  CreateMenuItemDto,
  SearchMenuItemsDto,
  UpdateMenuItemDto,
} from '~/menu/dto/menu.dto';
import { MenuService } from '~/menu/menu.service';
import { Role } from '@prisma/client';
import {GetUserRole} from "~/common/decorators/get-role.decorator";
import { OptionalAtGuard } from '~/common/guards';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/item')
  async createMenuItem(
    @Body() dto: CreateMenuItemDto,
    @GetUserId() userId: string,
    @GetUserRole() userRole: Role
  ) {
    return this.menuService.createMenuItem(dto, userId, userRole);
  }

  @Patch('/item/:id')
  async updateMenuItem(
    @Param('id') id: string,
    @Body() dto: UpdateMenuItemDto,
    @GetUserId() userId: string,
    @GetUserRole() userRole: Role
  ) {
    return this.menuService.updateMenuItem(id, dto, userId, userRole);
  }

  @Delete('/item/:id')
  async deleteMenuItem(
    @Param('id') id: string,
    @GetUserId() userId: string,
    @GetUserRole() userRole: Role,
  ) {
    return this.menuService.delete(id, userId, userRole);
  }

  @Public()
  @Get('/filters')
  async getFilters(@Query('is-selectable') isSelectable: string) {
    return this.menuService.getFilters(isSelectable);
  }

  @Public()
  @UseGuards(OptionalAtGuard)
  @Get('/discovery')
  async getDiscovery(@GetUserId() userId: string | undefined) {
    return this.menuService.getDiscovery(userId);
  }

  @Public()
  @UseGuards(OptionalAtGuard)
  @Get('/search')
  async search(
    @GetUserId() userId: string | undefined,
    @Query() dto: SearchMenuItemsDto,
  ) {
    return this.menuService.search(userId, dto);
  }

  @Public()
  @Get('/item/:id')
  async getMenuItemById(@Param('id') id: string) {
    return this.menuService.getMenuItemById(id);
  }

  @Get('/categories/:restaurantId')
  async getCategories(@Param('restaurantId') restaurantId: string) {
    return this.menuService.getCategories(restaurantId)
  }
}
