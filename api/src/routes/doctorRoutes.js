import { Router } from "express";
import { DoctorController } from "../controllers/doctorController.js";

const router = Router();

router.get("/", DoctorController.getAllDoctors);

export default router;
