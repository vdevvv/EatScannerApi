import {Body, Controller, Post} from '@nestjs/common';
import {CreateMenuItemDto} from "~/menu/dto/menu.dto";
import {MenuItemService} from "~/menu/menu-item.service";

@Controller('menu')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) {
  }

  @Post('/item')
  async createMenuItem(@Body() dto: CreateMenuItemDto) {
    return this.menuItemService.createMenuItem(dto)
  }
}
