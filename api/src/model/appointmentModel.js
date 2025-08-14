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

  async createAppointment({ date, patientId, doctorId, status }) {
    return await prisma.appointment.create({
      data: {
        date,
        patientId,
        doctorId,
        status,
      },
      include: {
        doctor: {
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
        },
        patient: true,
      },
    });
  },

  async getAllAppointmentsByPatient(patientId) {
    return await prisma.appointment.findMany({
      where: {
        patientId: patientId,
      },
      orderBy: {
        date: "asc",
      },
      include: {
        doctor: {
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
        },
      },
    });
  },
};
