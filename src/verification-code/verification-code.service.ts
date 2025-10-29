import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class VerificationCodeService {
  private readonly logger = new Logger(VerificationCodeService.name);
  constructor(private readonly prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async cleanUp() {
    const result = await this.prisma.verificationCode.deleteMany({
      where: {
        OR: [{ expiresAt: { lt: new Date() } }, { isUsed: true }],
      },
    });

    this.logger.log(`🧹 Cleaned up ${result.count} expired verification codes`);
  }
}
