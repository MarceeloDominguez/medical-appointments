import { Router } from "express";
import { SpecialtyController } from "../controllers/stecialtyController.js";

const router = Router();

router.get("/", SpecialtyController.getSpecialties);
router.get("/:id", SpecialtyController.getSpecialtyById);

export default router;
