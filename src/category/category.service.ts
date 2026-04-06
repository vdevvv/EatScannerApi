import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateCategoryDto, UpdateCategoryDto} from "~/category/dto/category.dto";
import {PrismaService} from "~/prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createCategory(dto: CreateCategoryDto) {
    const menu = await this.prisma.menu.findUnique({
      where: {id: dto.menuId}
    });

    if (!menu) {
      throw new NotFoundException("Menu not found");
    }

    return this.prisma.category.create({
      data: {
        name: dto.name,
        menuId: dto.menuId
      }
    });
  }

  async findByMenu(menuId: string) {
    return this.prisma.category.findMany({
      where: { menuId }
    });
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException("Category not found");
    }

    return this.prisma.category.update({
      where: { id },
      data: { name: dto.name },
    });
  }

  async deleteCategory(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException("Category not found");
    }

    const itemsCount = await this.prisma.menuItem.count({
      where: { categoryId: id },
    });
    if (itemsCount > 0) {
      throw new BadRequestException("Category has menu items");
    }

    return this.prisma.category.delete({ where: { id } });
  }
}
