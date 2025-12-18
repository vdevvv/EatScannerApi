import { PageOptionsDto } from '~/common/dto/page';
import {
  IsArray,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CountryCode } from 'libphonenumber-js';

export class SearchFriendDto extends PageOptionsDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  q?: string;
}

class ContactItemDto {
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  countryCode?: CountryCode;
}

export class SyncContactsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactItemDto)
  contacts: ContactItemDto[];
}

export enum FriendshipStatus {
  NONE = 'NONE',
  FRIEND = 'FRIEND',
  SENT = 'SENT',
  RECEIVED = 'RECEIVED',
}
