/*
  Warnings:

  - A unique constraint covering the columns `[place_id]` on the table `restaurants` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "restaurants_place_id_key" ON "restaurants"("place_id");
