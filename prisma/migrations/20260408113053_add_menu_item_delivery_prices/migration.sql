-- Create menu item delivery prices table
CREATE TABLE "menu_item_delivery_prices" (
  "id" TEXT NOT NULL,
  "menu_item_id" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "price" DOUBLE PRECISION NOT NULL,
  CONSTRAINT "menu_item_delivery_prices_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "menu_item_delivery_prices_menu_item_id_provider_key"
  ON "menu_item_delivery_prices"("menu_item_id", "provider");

ALTER TABLE "menu_item_delivery_prices"
  ADD CONSTRAINT "menu_item_delivery_prices_menu_item_id_fkey"
  FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
