import { afterEach } from "node:test";
import { AuthService } from "../../services/authService";
import prisma from "../../services/prisma";
import { describe, expect, it, beforeEach, jest } from "@jest/globals";

describe("AuthService", () => {
  let authService: AuthService;
  const originalEnv = process.env;

  beforeEach(async () => {
    process.env.ADMIN_EMAIL = "andreaFan@unlimited.com";
    process.env.ADMIN_PASSWORD = "Aa7882205@";
    authService = new AuthService();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("login", () => {
    it("should login successfully with correct credentials", async () => {
      const result = await authService.login(
        "andreaFan@unlimited.com",
        "Aa7882205@"
      );
      expect(result.user).toBeDefined();
      expect(result.token).toBeDefined();
      expect(result.user.role).toBe("admin");
    });
  });
});
