import {
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

  @Patch('accept/:requestId')
  accept(@GetUserId() userId: string, @Param('requestId') requestId: string) {
    return this.friendService.acceptRequest(userId, requestId);
  }

  @Patch('reject/:requestId')
  reject(@GetUserId() userId: string, @Param('requestId') requestId: string) {
    return this.friendService.rejectRequest(userId, requestId);
  }

  @Patch('/cancel/:requestId')
  async cancelRequest(@GetUserId() userId: string, @Param('requestId') requestId: string) {
    return this.friendService.cancelRequest(userId, requestId);
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
}
