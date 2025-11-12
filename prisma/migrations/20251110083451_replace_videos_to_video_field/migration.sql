/*
  Warnings:

  - You are about to drop the column `videos` on the `menu_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "menu_items" DROP COLUMN "videos",
ADD COLUMN     "video" TEXT;
