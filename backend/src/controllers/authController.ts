import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { AppError } from "../types/error";

export class AuthController {
  constructor(private authService: AuthService) {}

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new AppError(400, "Please provide email and password");
      }
      const result = await this.authService.login(email, password);

      res.status(200).json({
        status: "success",
        data: {
          email: result.user.email,
          role: result.user.role,
        },
        token: result.token,
      });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({
          status: "error",
          message: error.message,
        });
      }
      console.error("Login error", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  };
}
