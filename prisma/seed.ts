import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

const tagData: Prisma.TagCreateInput[] = [
  { name: "Vegan" },
  { name: "Quick" },
  { name: "Dinner" },
  { name: "Italian" },
  { name: "Comfort Food" },
];

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice Bites",
    email: "alice@bitelist.com",
    recipes: {
      create: [
        {
          title: "Creamy Vegan Alfredo",
          ingredients: ["Cashews", "Garlic", "Nutritional Yeast", "Pasta"],
          tags: {
            connect: [{ name: "Vegan" }, { name: "Italian" }],
          },
        },
      ],
    },
  },
  {
    name: "Bob Cooks",
    email: "bob@bitelist.com",
    recipes: {
      create: [
        {
          title: "One-Pan Garlic Chicken",
          ingredients: ["Chicken", "Garlic", "Olive Oil", "Lemon"],
          tags: {
            connect: [{ name: "Quick" }, { name: "Dinner" }],
          },
        },
      ],
    },
  },
];

export async function main() {
  // Create tags first so we can connect them
  for (const tag of tagData) {
    await prisma.tag.upsert({
      where: { name: tag.name },
      update: {},
      create: tag,
    });
  }

  // Create users and recipes
  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("✅ Database has been seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
