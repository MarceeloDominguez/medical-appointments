import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DoctorModel = {
  async getAllDoctors() {
    return await prisma.doctor.findMany({
      orderBy: {
        id: "asc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
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
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
        specialty: true,
        appointments: {
          include: {
            patient: {
              select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
              },
            },
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
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
        specialty: true,
        appointments: {
          include: {
            patient: {
              select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });
  },

  async createDoctor(data) {
    const { userId, specialtyId, bio, hospital, location, workingHours } = data;

    return await prisma.doctor.create({
      data: {
        userId,
        specialtyId,
        bio,
        hospital,
        location,
        workingHours,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
        specialty: true,
      },
    });
  },
};
