import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "~/prisma/prisma.service";
import {FriendStatus, Prisma} from "@prisma/client";
import {PageDto, PageMetaDto, PageOptionsDto} from "~/common/dto/page";

@Injectable()
export class FriendshipService {
  constructor(private prisma: PrismaService) {
  }

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
      where: {id: request.id},
    });
  }

  async removeFriend(userId: string, friendId: string) {
    const relation = await this.prisma.friendship.findFirst({
      where: {
        status: 'ACCEPTED',
        OR: [
          {requesterId: userId, receiverId: friendId},
          {requesterId: friendId, receiverId: userId},
        ],
      },
    });

    if (!relation) throw new NotFoundException('Not friends');

    return this.prisma.friendship.delete({where: {id: relation.id}});
  }

  async getMyFriends(userId: string, pageOptionsDto: PageOptionsDto) {
    const {skip, take, search} = pageOptionsDto
    const searchFilter = search
      ? Prisma.sql`AND (u.full_name ILIKE ${'%' + search + '%'} OR u.user_name ILIKE ${'%' + search + '%'})`
      : Prisma.empty;

    const [friends, countResult] = await Promise.all([
      this.prisma.$queryRaw<Array<{
        id: string
        email: string
        full_name: string | null
        user_name: string | null
        phone: string | null
        avatar: string
        created_at: string
        updated_at: string
      }>>`
          SELECT DISTINCT u.id,
                          u.email,
                          u.full_name as "fullName",
                          u.user_name as "userName",
                          u.phone,
                          u.avatar,
                          u.created_at as "createdAt",
                          u.updated_at as "updatedAt"
          FROM friendships f
                   JOIN users u
                        ON (u.id = f.requester_id OR u.id = f.receiver_id)
          WHERE f.status = 'ACCEPTED'
            AND (f.requester_id = ${userId} OR f.receiver_id = ${userId})
            AND u.id != ${userId} ${searchFilter}
          ORDER BY u.full_name, u.user_name ASC
              LIMIT ${take}
          OFFSET ${skip};
      `,
      this.prisma.$queryRaw<{ count: number }[]>`
          SELECT COUNT(DISTINCT u.id) AS count
          FROM friendships f
              JOIN users u
          ON (u.id = f.requester_id OR u.id = f.receiver_id)
          WHERE f.status = 'ACCEPTED'
            AND (f.requester_id = ${userId}
             OR f.receiver_id = ${userId})
            AND u.id != ${userId} ${searchFilter}
      `
    ])
    const itemsCount = Number(countResult[0]?.count ?? 0);
    const pageMetaDto = new PageMetaDto({pageOptionsDto, itemsCount});
    return new PageDto(friends, pageMetaDto);
  }
}
