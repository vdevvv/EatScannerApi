import { PrismaClient, TagType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.tag.upsert({
    where: { slug: 'korean' },
    update: {},
    create: {
      type: TagType.Cuisine,
      name: 'Korean',
      slug: 'korean',
      icon: '🇰🇷',
      isSelectable: true,
    },
  });

  await prisma.tag.upsert({
    where: { slug: 'halal' },
    update: {},
    create: {
      type: TagType.Dietary_Restrictions,
      name: 'Halal',
      slug: 'halal',
      icon: '☪️',
      isSelectable: true,
    },
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
