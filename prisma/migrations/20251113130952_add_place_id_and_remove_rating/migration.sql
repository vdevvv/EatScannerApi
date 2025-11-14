/*
  Warnings:

  - You are about to drop the column `google_rating` on the `restaurants` table. All the data in the column will be lost.
  - You are about to drop the column `trustpilot_rating` on the `restaurants` table. All the data in the column will be lost.
  - Added the required column `place_id` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurants" DROP COLUMN "google_rating",
DROP COLUMN "trustpilot_rating",
ADD COLUMN     "place_id" TEXT NOT NULL;
