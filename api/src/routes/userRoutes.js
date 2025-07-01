import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const router = Router();

router.get("/", UserController.getAllUsers);

export default router;
