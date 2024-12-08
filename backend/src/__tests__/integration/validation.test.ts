import request from "supertest";
import app from "../../server";
import { describe, it, expect } from "@jest/globals";

describe("Request Validation", () => {
  describe("Event Validation", () => {
    it("should reject invalid event type", async () => {
      const res = await request(app).post("/api/events").send({
        type: "invalid_type",
        metadata: {},
      });

      expect(res.status).toBe(400);
      expect(res.body.errors).toBeDefined();
      expect(res.body.errors[0].msg).toBe("Invalid event type");
    });

    it("should accept valid event type", async () => {
      const res = await request(app)
        .post("/api/events")
        .send({
          type: "github_click",
          metadata: { referer: "homepage" },
        });

      expect(res.status).toBe(501);
    });
  });

  describe("User registration validation", () => {
    it("should reject weak password", async () => {
      const res = await request(app).post("/api/auth/register").send({
        email: "test@test.com",
        password: "123",
        role: "visitor",
      });
      expect(res.status).toBe(400);
      expect(res.body.errors).toBeDefined();
    });
  });
});
