-- DropForeignKey
ALTER TABLE "public"."categories" DROP CONSTRAINT "categories_menu_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."menu_items" DROP CONSTRAINT "menu_items_category_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."menus" DROP CONSTRAINT "menus_restaurant_id_fkey";

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "menus_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
