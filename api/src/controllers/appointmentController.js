import { AppointmentService } from "../services/appointmentService.js";

export const AppointmentController = {
  async getAllAppointments(req, res) {
    try {
      const appointments = await AppointmentService.getAllAppointments();
      res.status(200).json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
