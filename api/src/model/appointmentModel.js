import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const AppointmentModel = {
  async getAllAppointments() {
    return await prisma.appointment.findMany({
      orderBy: {
        id: "asc",
      },
    });
  },
};
