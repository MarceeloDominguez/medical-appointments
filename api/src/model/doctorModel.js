import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DoctorModel = {
  async getAllDoctors() {
    return await prisma.doctor.findMany({
      orderBy: {
        id: "asc",
      },
    });
  },
};
