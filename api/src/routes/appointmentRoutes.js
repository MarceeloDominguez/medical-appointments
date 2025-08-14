import { Router } from "express";
import { AppointmentController } from "../controllers/appointmentController.js";

const router = Router();

router.get("/", AppointmentController.getAllAppointments);
router.post("/", AppointmentController.createAppointment);
router.get(
  "/patient/:patientId",
  AppointmentController.getAllAppointmentsByPatient
);

export default router;
