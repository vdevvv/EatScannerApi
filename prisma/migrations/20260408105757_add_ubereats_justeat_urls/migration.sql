-- Add UberEats and JustEat URLs to restaurants
ALTER TABLE "restaurants"
  ADD COLUMN "uber_eats_url" TEXT,
  ADD COLUMN "just_eat_url" TEXT;
