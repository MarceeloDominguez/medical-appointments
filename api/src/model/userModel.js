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

  async registerUser(userData) {
    const { name, email, password, role } = userData;

    return await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });
  },

  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  },
};
