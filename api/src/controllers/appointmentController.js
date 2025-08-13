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

  async createAppointment(req, res) {
    try {
      const { date, patientId, doctorId, status } = req.body;

      const parsedDate = new Date(date);

      const newAppointment = await AppointmentService.createAppointment({
        date: parsedDate,
        patientId,
        doctorId,
        status,
      });

      res.status(201).json(newAppointment);
    } catch (error) {
      console.error("Error creating appointment:", error);
      res.status(400).json({ message: "Bad Request", error: error.message });
    }
  },
};
