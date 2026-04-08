-- Add delivery URLs to menu items
ALTER TABLE "menu_items"
  ADD COLUMN "deliveroo_url" TEXT,
  ADD COLUMN "uber_eats_url" TEXT,
  ADD COLUMN "just_eat_url" TEXT;
