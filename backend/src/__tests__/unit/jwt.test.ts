import { generateToken, verifyToken } from "../../utils/jwt";
import { User } from "@prisma/client";
import { describe, expect, it } from "@jest/globals";

describe("JWT utils", () => {
  const mockUser: User = {
    id: "1",
    email: "test@test.com",
    password: "hashedPassword",
    role: "visitor",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it("should generate a valid token", () => {
    const token = generateToken(mockUser);
    expect(typeof token).toBe("string");
    expect(token).toBeTruthy();
  });

  it("should verify a valid token", () => {
    const token = generateToken(mockUser);
    const decoded = verifyToken(token);

    expect(decoded.email).toBe(mockUser.email);
    expect(decoded.userId).toBe(mockUser.id);
    expect(decoded.role).toBe(mockUser.role);
  });

  it("should throw error for invalid token", () => {
    expect(() => {
      verifyToken("invalid-token");
    }).toThrow("Invalid Token");
  });
});
