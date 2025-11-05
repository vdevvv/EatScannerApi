import {Controller, Delete, Param, Patch, Post} from '@nestjs/common';
import {FriendshipService} from './friendship.service';
import {GetUserId} from "~/common/decorators";

@Controller('friends')
export class FriendshipController {
  constructor(private readonly friendService: FriendshipService) {}

  @Post('request/:targetId')
  async sendFriendRequest(
    @GetUserId() userId: string,
    @Param('targetId') targetId: string
  ) {
    return this.friendService.sendFriendRequest(userId, targetId)
  }

  @Patch('accept/:requestId')
  accept(
    @GetUserId() userId: string,
    @Param('requestId') requestId: string
  ) {
    return this.friendService.acceptRequest(userId, requestId);
  }

  @Patch('reject/:requestId')
  reject(
    @GetUserId() userId: string,
    @Param('requestId') requestId: string
  ) {
    return this.friendService.rejectRequest(userId, requestId);
  }

  @Delete(':friendId')
  remove(
    @GetUserId() userId: string,
    @Param('friendId') friendId: string
  ) {
    return this.friendService.removeFriend(userId, friendId);
  }
}
