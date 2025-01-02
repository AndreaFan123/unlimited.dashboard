import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export class AuthService {
  async login(email: string, password: string) {
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const user = {
        id: "1",
        email: process.env.ADMIN_EMAIL,
        role: "admin",
        password: process.env.ADMIN_PASSWORD,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const token = generateToken(user);
      return { user, token };
    }
    throw new Error("Invalid credentials");
  }
}
