import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateMenuItemDto, UpdateMenuItemDto} from "~/menu/dto/menu.dto";
import {PrismaService} from "~/prisma/prisma.service";

@Injectable()
export class MenuItemService {
  constructor(private readonly prisma: PrismaService) {
  }

  async createMenuItem(dto: CreateMenuItemDto) {
    await this.checkIfCategoryExist(dto.categoryId)
    return this.prisma.menuItem.create({
      data: {
        name: dto.name,
        price: dto.price,
        description: dto.description,
        image: dto.image,
        categoryId: dto.categoryId
      }
    })
  }

  async update(id: string, dto: UpdateMenuItemDto) {
    if (dto.categoryId) {
      await this.checkIfCategoryExist(dto.categoryId)
    }

    return this.prisma.menuItem.update({
      where: {id},
      data: dto
    });
  }

  async delete(id: string) {
    return this.prisma.menuItem.delete({
      where: { id }
    });
  }

  async findByCategory(categoryId: string) {
    return this.prisma.menuItem.findMany({
      where: { categoryId }
    });
  }

  private async checkIfCategoryExist(categoryId: string) {
    const category = await this.prisma.category.findUnique({
      where: {id: categoryId}
    });

    if (!category) {
      throw new NotFoundException("Category not found");
    }
  }
}
