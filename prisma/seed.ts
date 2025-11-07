import {PrismaClient} from "@prisma/client";
import {restaurants} from "./seed-data/restaurants";

const prisma = new PrismaClient()

async function main() {
  await Promise.all(
    restaurants.map((restaurant) =>
      prisma.restaurant.create({ data: restaurant })
    )
  );
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })