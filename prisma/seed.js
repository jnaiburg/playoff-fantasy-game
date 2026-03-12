import { prisma } from "../lib/prisma.js"; // note .js extension

async function main() {
  const user1 = await prisma.user.create({
    data: { username: "jrnai", email: "jrnai@gmail.com" },
  });

  const user2 = await prisma.user.create({
    data: { username: "johndoe", email: "johndoe@gmail.com" },
  });

  await prisma.team.create({
    data: { name: "Juggernauts", userId: user1.id },
  });

  await prisma.team.create({
    data: { name: "Destroyers", userId: user2.id },
  });

  console.log("✅ Seed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });