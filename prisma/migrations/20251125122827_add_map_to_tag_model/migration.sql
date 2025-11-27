/*
  Warnings:

  - You are about to drop the column `isSelectable` on the `tags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tags" DROP COLUMN "isSelectable",
ADD COLUMN     "is_selectable" BOOLEAN NOT NULL DEFAULT false;
