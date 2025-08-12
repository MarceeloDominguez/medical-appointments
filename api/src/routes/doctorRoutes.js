import { Router } from "express";
import { DoctorController } from "../controllers/doctorController.js";

const router = Router();

router.get("/", DoctorController.getAllDoctors);
router.get("/specialty/:specialtyId", DoctorController.getDoctorsBySpecialty);
router.get("/:id", DoctorController.getDoctorById);
router.post("/new", DoctorController.createDoctor);
router.put("/update/:id", DoctorController.updateDoctor);

export default router;
