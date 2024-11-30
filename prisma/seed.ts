import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.create({
    data: {
      login: "user1",
      rating: 1000,
      passwordHash: "admin",
    },
  });
  const user2 = await prisma.user.create({
    data: {
      login: "user2",
      rating: 2000,
      passwordHash: "admin",
    },
  });
  await prisma.game.create({
    data: {
      players: { connect: { id: user.id } },
      status: "idle",
      field: Array(9).fill(null),
    },
  });
  await prisma.game.create({
    data: {
      players: { connect: { id: user2.id } },
      status: "idle",
      field: Array(9).fill(null),
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
