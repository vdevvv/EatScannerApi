import {PageMetaDtoParameters} from "~/common/types/page-meta-dto.parameters.interface";

export class PageMetaDto {
  constructor({pageOptionsDto, itemsCount}: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page ?? 1
    this.take = pageOptionsDto.take ?? 20
    this.itemsCount = itemsCount
    this.pageCount = Math.ceil(this.itemsCount / this.take)
  }

  readonly page?: number;
  readonly take?: number;
  readonly itemsCount: number;
  readonly pageCount: number;
}