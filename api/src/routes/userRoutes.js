import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);

export default router;
