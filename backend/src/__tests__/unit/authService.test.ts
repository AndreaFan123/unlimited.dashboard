import { AuthService } from "../../services/authService";
import prisma from "../../services/prisma";
import { describe, expect, it, beforeEach, jest } from "@jest/globals";

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(async () => {
    authService = new AuthService();
    await prisma.user.deleteMany();
  });

  describe("register", () => {
    it("should register a new user successfully", async () => {
      const result = await authService.register(
        "test@test.com",
        "hashedPassword",
        "visitor"
      );
      expect(result.user).toBeDefined();
      expect(result.user.email).toBe("test@test.com");
      expect(result.user.role).toBe("visitor");
      expect(result.token).toBeDefined();
    });

    it("should throw an error if email is exists", async () => {
      await authService.register("test@test.com", "hashedPassword", "visitor");
      await expect(
        authService.register("test@test.com", "hashedPassword", "visitor")
      ).rejects.toThrow("Email already registered");
    });
  });
});
