import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateCategoryDto} from "~/category/dto/category.dto";
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
}
