/*
  Warnings:

  - Changed the type of `type` on the `verification_codes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "VerificationType" AS ENUM ('email_verification', 'password_reset');

-- AlterTable
ALTER TABLE "verification_codes" DROP COLUMN "type",
ADD COLUMN     "type" "VerificationType" NOT NULL;

-- DropEnum
DROP TYPE "public"."VerificationStatus";
