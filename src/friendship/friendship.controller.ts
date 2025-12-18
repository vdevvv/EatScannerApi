import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { GetUserId } from '~/common/decorators';
import { PageOptionsDto } from '~/common/dto/page';
import { SearchFriendDto, SyncContactsDto } from '~/friendship/dto/friend.dto';

@Controller('friends')
export class FriendshipController {
  constructor(private readonly friendService: FriendshipService) {}

  @Post('request/:targetId')
  async sendFriendRequest(
    @GetUserId() userId: string,
    @Param('targetId') targetId: string,
  ) {
    return this.friendService.sendFriendRequest(userId, targetId);
  }

  @Patch('accept/:targetUserId')
  accept(@GetUserId() currentUserId: string, @Param('targetUserId') targetUserId: string) {
    return this.friendService.acceptRequest(currentUserId, targetUserId);
  }

  @Patch('reject/:targetUserId')
  reject(@GetUserId() userId: string, @Param('targetUserId') targetUserId: string) {
    return this.friendService.rejectRequest(userId, targetUserId);
  }

  @Patch('/cancel/:targetUserId')
  async cancelRequest(@GetUserId() userId: string, @Param('targetUserId') targetUserId: string) {
    return this.friendService.cancelRequest(userId, targetUserId);
  }

  @Delete(':friendId')
  remove(@GetUserId() userId: string, @Param('friendId') friendId: string) {
    return this.friendService.removeFriend(userId, friendId);
  }

  @Get('my-friends')
  async getMyFriends(
    @GetUserId() userId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.friendService.getMyFriends(userId, pageOptionsDto);
  }

  @Get('sent-requests')
  async getSentRequests(
    @GetUserId() userId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.friendService.getSentPendingRequests(userId, pageOptionsDto);
  }

  @Get('received-requests')
  async getReceivedRequests(
    @GetUserId() userId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.friendService.getReceivedPendingRequests(userId, pageOptionsDto);
  }

  @Get('mutual/:otherUserId')
  async getMutualFriends(
    @GetUserId() userId: string,
    @Param('otherUserId') otherUserId: string,
  ) {
    return this.friendService.getMutualFriends(userId, otherUserId);
  }

  @Get('search')
  async searchNewFriends(
    @GetUserId() userId: string,
    @Query() searchDto: SearchFriendDto,
  ) {
    return this.friendService.searchUsers(userId, searchDto);
  }

  @Get('user-friends/:id')
  async getUserFriends(
    @Param('id') targetUserId: string,
    @GetUserId() currentUserId: string,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.friendService.getUserFriends(targetUserId, currentUserId, pageOptionsDto);
  }

  @Post('/sync-contacts')
  async syncContacts(
    @GetUserId() userId: string,
    @Body() dto: SyncContactsDto
  ) {
    return this.friendService.syncContacts(userId, dto);
  }
}
