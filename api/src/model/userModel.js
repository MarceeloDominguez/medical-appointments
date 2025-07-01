import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const UserModel = {
  async getAllUsers() {
    return await prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
    });
  },
};
