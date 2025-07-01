import { Router } from "express";
import { SpecialtyController } from "../controllers/stecialtyController.js";

const router = Router();

router.get("/", SpecialtyController.getSpecialties);

export default router;
