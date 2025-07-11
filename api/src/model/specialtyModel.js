import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const SpecialtyModel = {
  async getSpecialties() {
    return await prisma.specialty.findMany({
      orderBy: {
        id: "asc",
      },
    });
  },

  async getSpecialtyById(id) {
    return await prisma.specialty.findUnique({
      where: {
        id: id,
      },
    });
  },
};
