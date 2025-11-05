import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "~/prisma/prisma.service";
import {FriendStatus} from "@prisma/client";

@Injectable()
export class FriendshipService {
  constructor(private prisma: PrismaService) {}

  async sendFriendRequest(userId: string, targetId: string) {
    if (userId === targetId) {
      throw new ConflictException('You cannot add yourself as a friendship');
    }

    const existing = await this.prisma.friendship.findFirst({
      where: {
        OR: [
          {requesterId: userId, receiverId: targetId},
          {requesterId: targetId, receiverId: userId}
        ]
      }
    })

    if (existing) {
      throw new ConflictException('Friend request already exists or already friends');
    }

    return this.prisma.friendship.create({
      data: {
        requesterId: userId,
        receiverId: targetId,
        status: 'PENDING',
      },
    });
  }

  async acceptRequest(userId: string, requestId: string) {
    const request = await this.prisma.friendship.findFirst({
      where: {
        id: requestId,
        receiverId: userId,
        status: 'PENDING',
      },
    });

    if (!request) throw new NotFoundException('No pending request');

    return this.prisma.friendship.update({
      where: {id: request.id},
      data: {status: FriendStatus.ACCEPTED},
    });
  }

  async rejectRequest(userId: string, requestId: string) {
    const request = await this.prisma.friendship.findFirst({
      where: {
        id: requestId,
        receiverId: userId,
        status: 'PENDING',
      },
    });

    if (!request) throw new NotFoundException('No pending request');

    return this.prisma.friendship.delete({
      where: { id: request.id },
    });
  }

  async removeFriend(userId: string, friendId: string) {
    const relation = await this.prisma.friendship.findFirst({
      where: {
        status: 'ACCEPTED',
        OR: [
          { requesterId: userId, receiverId: friendId },
          { requesterId: friendId, receiverId: userId },
        ],
      },
    });

    if (!relation) throw new NotFoundException('Not friends');

    return this.prisma.friendship.delete({ where: { id: relation.id } });
  }
}
