import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import { FriendStatus, Prisma, User } from '@prisma/client';
import { PageDto, PageMetaDto, PageOptionsDto } from '~/common/dto/page';
import { FriendshipStatus, SearchFriendDto } from '~/friendship/dto/friend.dto';

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
          { requesterId: userId, receiverId: targetId },
          { requesterId: targetId, receiverId: userId },
        ],
      },
    });

    if (existing) {
      throw new ConflictException(
        'Friend request already exists or already friends',
      );
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
      where: { id: request.id },
      data: { status: FriendStatus.ACCEPTED },
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

  async cancelRequest(userId: string, requestId: string) {
    const request = await this.prisma.friendship.findFirst({
      where: {
        id: requestId,
        requesterId: userId,
        status: FriendStatus.PENDING,
      },
    });

    if (!request) throw new NotFoundException('No pending request');
    return this.prisma.friendship.delete({
      where: {
        id: requestId,
      },
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

  async getMyFriends(userId: string, pageOptionsDto: PageOptionsDto) {
    const { skip, take, search } = pageOptionsDto;
    const searchFilter = search
      ? Prisma.sql`AND (u.full_name ILIKE ${'%' + search + '%'} OR u.user_name ILIKE ${'%' + search + '%'})`
      : Prisma.empty;

    const [friends, countResult] = await Promise.all([
      this.prisma.$queryRaw<
        Array<{
          id: string;
          email: string;
          full_name: string | null;
          user_name: string | null;
          phone: string | null;
          avatar: string;
          created_at: string;
          updated_at: string;
        }>
      >`
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
      `,
    ]);
    const itemsCount = Number(countResult[0]?.count ?? 0);
    const pageMetaDto = new PageMetaDto({ pageOptionsDto, itemsCount });
    return new PageDto(friends, pageMetaDto);
  }

  async getSentPendingRequests(userId: string, pageOptionsDto: PageOptionsDto) {
    const { skip, take } = pageOptionsDto;
    const where: Prisma.FriendshipWhereInput = {
      requesterId: userId,
      status: FriendStatus.PENDING,
    };

    const [data, itemsCount] = await Promise.all([
      this.prisma.friendship.findMany({
        where,
        skip,
        take,
        select: {
          id: true,
          receiver: {
            select: {
              id: true,
              userName: true,
              fullName: true,
              avatar: true,
            },
          },
        },
      }),
      this.prisma.friendship.count({ where }),
    ]);

    const formattedData = data.map((item) => ({
      id: item.id,
      userId: item.receiver.id,
      userName: item.receiver.userName,
      fullName: item.receiver.fullName,
      avatar: item.receiver.avatar,
    }));

    const pageMetaDto = new PageMetaDto({ pageOptionsDto, itemsCount });
    return new PageDto(formattedData, pageMetaDto);
  }

  async getReceivedPendingRequests(
    userId: string,
    pageOptionsDto: PageOptionsDto,
  ) {
    const { skip, take } = pageOptionsDto;
    const where: Prisma.FriendshipWhereInput = {
      receiverId: userId,
      status: FriendStatus.PENDING,
    };
    const [data, itemsCount] = await Promise.all([
      this.prisma.friendship.findMany({
        where,
        skip,
        take,
        select: {
          id: true,
          requester: {
            select: {
              id: true,
              userName: true,
              fullName: true,
              avatar: true,
            },
          },
        },
      }),
      this.prisma.friendship.count({ where }),
    ]);

    const formattedData = data.map((item) => ({
      id: item.id,
      userId: item.requester.id,
      userName: item.requester.userName,
      fullName: item.requester.fullName,
      avatar: item.requester.avatar,
    }));

    const pageMetaDto = new PageMetaDto({ pageOptionsDto, itemsCount });
    return new PageDto(formattedData, pageMetaDto);
  }

  async getMutualFriends(currentUserId: string, targetUserId: string) {
    return this.prisma.$queryRaw<User[]>`
      SELECT u.id,
             u.full_name AS "fullName",
             u.user_name AS "userName",
             u.avatar,
             u.bio
      FROM users u
             JOIN friendships f1
                  ON (f1.requester_id = u.id OR f1.receiver_id = u.id)
                    AND f1.status = 'ACCEPTED'
                    AND (f1.requester_id = ${currentUserId} OR f1.receiver_id = ${currentUserId})
             JOIN friendships f2
                  ON (f2.requester_id = u.id OR f2.receiver_id = u.id)
                    AND f2.status = 'ACCEPTED'
                    AND (f2.requester_id = ${targetUserId} OR f2.receiver_id = ${targetUserId})

      WHERE u.id NOT IN (${currentUserId}, ${targetUserId})
    `;
  }

  async searchUsers(userId: string, searchDto: SearchFriendDto) {
    const { q, take, skip } = searchDto;

    if (!q) {
      return new PageDto(
        [],
        new PageMetaDto({ itemsCount: 0, pageOptionsDto: searchDto }),
      );
    }

    const whereClause: Prisma.UserWhereInput = {
      AND: [
        { id: { not: userId } },
        {
          OR: [
            { userName: { contains: q, mode: 'insensitive' as const } },
            { fullName: { contains: q, mode: 'insensitive' as const } },
          ],
        },
      ],
    };

    const [users, itemsCount] = await Promise.all([
      this.prisma.user.findMany({
        where: whereClause,
        take,
        skip,
        select: {
          id: true,
          fullName: true,
          userName: true,
          avatar: true,
          sentFriendRequests: {
            where: { receiverId: userId },
            select: { status: true, id: true },
          },
          receivedFriendRequests: {
            where: { requesterId: userId },
            select: { status: true, id: true },
          },
        },
      }),
      this.prisma.user.count({ where: whereClause }),
    ]);

    const mappedUsers = users.map((user) => {
      let status: FriendshipStatus = FriendshipStatus.NONE;
      let friendshipId: string | null = null;

      const requestFromMe = user.receivedFriendRequests[0];
      const requestToMe = user.sentFriendRequests[0];

      if (requestFromMe) {
        friendshipId = requestFromMe.id;
        if (requestFromMe.status === 'ACCEPTED') {
          status = FriendshipStatus.FRIEND;
        } else if (requestFromMe.status === 'PENDING') {
          status = FriendshipStatus.SENT;
        }
      } else if (requestToMe) {
        friendshipId = requestToMe.id;
        if (requestToMe.status === 'ACCEPTED') {
          status = FriendshipStatus.FRIEND;
        } else if (requestToMe.status === 'PENDING') {
          status = FriendshipStatus.RECEIVED;
        }
      }

      const { sentFriendRequests, receivedFriendRequests, ...userData } = user;
      return {
        ...userData,
        friendshipStatus: status,
        friendshipId: friendshipId,
      };
    });

    const pageMetaDto = new PageMetaDto({
      itemsCount,
      pageOptionsDto: searchDto,
    });
    return new PageDto(mappedUsers, pageMetaDto);
  }
}
