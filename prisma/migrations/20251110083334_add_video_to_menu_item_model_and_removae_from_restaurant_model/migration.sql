/*
  Warnings:

  - You are about to drop the column `videos` on the `restaurants` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "menu_items" ADD COLUMN     "videos" TEXT[];

-- AlterTable
ALTER TABLE "restaurants" DROP COLUMN "videos";
