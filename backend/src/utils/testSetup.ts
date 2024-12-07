import prisma from "../services/prisma";

beforeEach(async () => {
  await prisma.session.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
