/*
  Warnings:

  - You are about to drop the column `images` on the `menu_items` table. All the data in the column will be lost.
  - Added the required column `image` to the `menu_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menu_items" DROP COLUMN "images",
ADD COLUMN     "image" TEXT NOT NULL;
