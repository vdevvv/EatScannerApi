import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { VerificationCodeModule } from '~/verification-code/verification-code.module';
import { ScheduleModule } from '@nestjs/schedule';
import { FriendshipModule } from '~/friendship/friendship.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { PlaceModule } from '~/place/place.module';
import { CategoryModule } from './category/category.module';
import { MenuItemModule } from './menu/menu-item.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    UserModule,
    AuthModule,
    VerificationCodeModule,
    FriendshipModule,
    RestaurantModule,
    PlaceModule,
    CategoryModule,
    MenuItemModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
