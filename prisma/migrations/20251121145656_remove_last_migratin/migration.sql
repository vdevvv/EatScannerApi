/*
  Warnings:

  - You are about to drop the `_CharacteristicToMenuItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `characteristics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_CharacteristicToMenuItem" DROP CONSTRAINT "_CharacteristicToMenuItem_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_CharacteristicToMenuItem" DROP CONSTRAINT "_CharacteristicToMenuItem_B_fkey";

-- DropTable
DROP TABLE "public"."_CharacteristicToMenuItem";

-- DropTable
DROP TABLE "public"."characteristics";
