/*
  Warnings:

  - Added the required column `type` to the `tags` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TagType" AS ENUM ('Cuisine', 'Meal_Type', 'Dietary_Restrictions', 'Spice_Level');

-- AlterTable
ALTER TABLE "tags" ADD COLUMN     "type" "TagType" NOT NULL;
