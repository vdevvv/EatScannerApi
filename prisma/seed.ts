import { PrismaClient } from '@prisma/client';
import { restaurants } from './seed-data/restaurants';
import { tagsData } from './seed-data/tags';

const prisma = new PrismaClient();

async function main() {
  for (const tag of tagsData) {
    await prisma.tag.upsert({
      where: { slug: tag.slug },
      update: {},
      create: tag,
    });
  }

  await Promise.all(
    restaurants.map((restaurant) =>
      prisma.restaurant.create({ data: restaurant }),
    ),
  );
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
