import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DoctorModel = {
  async getAllDoctors() {
    return await prisma.doctor.findMany({
      orderBy: {
        id: "asc",
      },
      include: {
        user: true,
        specialty: true,
      },
    });
  },

  async getDoctorsBySpecialty(specialtyId) {
    return await prisma.doctor.findMany({
      where: {
        specialtyId: specialtyId,
      },
      include: {
        user: true,
        specialty: true,
        appointments: {
          include: {
            patient: true,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    });
  },

  async getDoctorById(doctorId) {
    return await prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
      include: {
        user: true,
        specialty: true,
        appointments: {
          include: {
            patient: true,
          },
        },
      },
    });
  },
};
