import { Request, Response, NextFunction } from "express";
import {
  authenticateToken,
  requireRole,
} from "../../middleware/authMiddleware";
import { generateToken } from "../../utils/jwt";
import { describe, expect, it, jest } from "@jest/globals";
import { beforeEach } from "node:test";

describe("Auth middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = { headers: {} };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as any as Response;

    nextFunction = jest.fn();
  });

  describe("authenticateToken", () => {
    it("should authenticate valid token", () => {
      const token = generateToken({
        id: "1",
        email: "test@example.com",
        role: "visitor",
        password: "hashedPassword",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      mockRequest = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };

      authenticateToken(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(nextFunction).toHaveBeenCalled();
      expect(mockRequest.user).toBeDefined();
      expect(mockRequest.user?.email).toBe("test@example.com");
    });
  });

  describe("require role", () => {
    it("should allow access for correct role", () => {
      mockRequest.user = {
        userId: "1",
        email: "test@example.com",
        role: "admin",
      };

      const middleware = requireRole(["admin"]);
      middleware(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(nextFunction).toHaveBeenCalled();
    });
  });
});
