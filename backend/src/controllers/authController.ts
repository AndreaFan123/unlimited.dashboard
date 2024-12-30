import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { AppError } from "../types/error";

export class AuthController {
  constructor(private authService: AuthService) {}

  async register(req: Request, res: Response) {
    try {
      const { email, password, role } = req.body;

      if (!email || !password) {
        throw new AppError(400, "Please provide email and password");
      }

      const result = await this.authService.register(email, password);
      const { password: _, ...safeUserData } = result.user;

      return res.status(201).json({
        status: "success",
        data: {
          user: safeUserData,
          token: result.token,
        },
      });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          status: "error",
          message: error.message,
        });
      }
      console.error("Register Error", error);
      return res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new AppError(400, "Please provide email and password");
      }
      const result = await this.authService.login(email, password);
      const { password: _, ...safeUserData } = result.user;

      return res.status(200).json({
        status: "success",
        data: {
          user: safeUserData,
          token: result.token,
        },
      });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          status: "error",
          message: error.message,
        });
      }
      console.error("Login error", error);
      return res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
}
