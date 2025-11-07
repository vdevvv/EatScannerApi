import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CategoryService} from './category.service';
import {CreateCategoryDto} from "~/category/dto/category.dto";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {
  }

  @Post()
  async createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto)
  }

  @Get("menu/:menuId")
  async findByMenu(@Param("menuId") menuId: string) {
    return this.categoryService.findByMenu(menuId)
  }
}
