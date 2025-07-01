import { AppointmentModel } from "../model/appointmentModel.js";

export const AppointmentService = {
  async getAllAppointments() {
    return await AppointmentModel.getAllAppointments();
  },
};
