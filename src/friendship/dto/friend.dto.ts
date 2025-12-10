import { PageOptionsDto } from '~/common/dto/page';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class SearchFriendDto extends PageOptionsDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  q?: string;
}

export enum FriendshipStatus {
  NONE = 'NONE',
  FRIEND = 'FRIEND',
  SENT = 'SENT',
  RECEIVED = 'RECEIVED',
}