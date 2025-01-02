import { Router } from "express";
import { Response, Request } from "express";
import { AuthService } from "../services/authService";
import {
  validateRegister,
  validateLogin,
  validateRequest,
} from "../middleware/validation";
import { AuthController } from "../controllers/authController";

const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

router.post("/login", validateLogin, validateRequest, authController.login);

export default router;
