import { Router } from "express";
import { AppointmentController } from "../controllers/appointmentController.js";

const router = Router();

router.get("/", AppointmentController.getAllAppointments);

export default router;
