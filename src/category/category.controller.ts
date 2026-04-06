import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CategoryService} from './category.service';
import {CreateCategoryDto, UpdateCategoryDto} from "~/category/dto/category.dto";

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

  @Patch(":id")
  async updateCategory(
    @Param("id") id: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, dto);
  }

  @Delete(":id")
  async deleteCategory(@Param("id") id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
