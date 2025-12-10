/*
  Warnings:

  - Added the required column `venue_type_snapshot` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RestaurantType" AS ENUM ('CAFE', 'RESTAURANT');

-- CreateEnum
CREATE TYPE "DishBadge" AS ENUM ('SPICY', 'DESSERT', 'HEALTHY');

-- AlterTable
ALTER TABLE "menu_items" ADD COLUMN     "badges" "DishBadge"[];

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "badges_snapshot" "DishBadge"[],
ADD COLUMN     "venue_type_snapshot" "RestaurantType" NOT NULL;

-- AlterTable
ALTER TABLE "restaurants" ADD COLUMN     "type" "RestaurantType" NOT NULL DEFAULT 'RESTAURANT';
