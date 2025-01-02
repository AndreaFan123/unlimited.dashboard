import request from "supertest";
import { createServer } from "../../server";
import { describe, it, expect } from "@jest/globals";

describe("Request Validation", () => {
  const app = createServer();
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
});
