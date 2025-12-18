import { Prisma } from '@prisma/client';

export const friendshipSelectFields = {
  id: true,
  fullName: true,
  userName: true,
  avatar: true,
  phone: true,
  sentFriendRequests: {
    select: { id: true, status: true },
  },
  receivedFriendRequests: {
    select: { id: true, status: true },
  },
} satisfies Prisma.UserSelect;

export type UserWithFriendshipRelations = Prisma.UserGetPayload<{
  select: typeof friendshipSelectFields;
}>;
