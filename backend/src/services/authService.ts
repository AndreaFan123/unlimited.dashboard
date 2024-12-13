import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "./prisma";
import { generateToken } from "../utils/jwt";

export class AuthService {
  private static SALT_ROUNDS = 10;

  async register(email: string, password: string, role: "admin" | "visitor") {
    // Check if user is existed
    const existedUser = await prisma.user.findUnique({ where: { email } });
    if (existedUser) {
      throw new Error("Email already registered");
    }
    // If user is not existed, then hashed password and create new user
    const hashedPassword = await bcrypt.hash(password, AuthService.SALT_ROUNDS);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });
    const token = generateToken(user);
    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("user not found");
    }
    // If user existed, verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid Password");
    }
    const token = generateToken(user);
    return { user, token };
  }
}
