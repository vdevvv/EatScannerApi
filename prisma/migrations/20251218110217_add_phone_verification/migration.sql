-- AlterEnum
ALTER TYPE "VerificationType" ADD VALUE 'phone_verification';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "avatar" SET DEFAULT 'https://res.cloudinary.com/djdf9jke8/image/upload/v1765534297/profile_m2necg_fdne3f.png';

-- AlterTable
ALTER TABLE "verification_codes" ADD COLUMN     "payload" TEXT;
