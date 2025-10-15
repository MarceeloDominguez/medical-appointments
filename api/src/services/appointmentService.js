import { AppointmentModel } from "../model/appointmentModel.js";

export const AppointmentService = {
  async getAllAppointments() {
    return await AppointmentModel.getAllAppointments();
  },

  async createAppointment({
    date,
    patientId,
    doctorId,
    status,
    healthCoverage,
  }) {
    return await AppointmentModel.createAppointment({
      date,
      patientId,
      doctorId,
      status,
      healthCoverage,
    });
  },

  async getAllAppointmentsByPatient(patientId) {
    return await AppointmentModel.getAllAppointmentsByPatient(patientId);
  },
};
