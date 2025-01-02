import request from "supertest";
import { createServer } from "../../server";
import { describe, expect, it } from "@jest/globals";

describe("Security Middleware", () => {
  const app = createServer();
  it("should have security headers", async () => {
    const response = await request(app).get("/health");
    expect(response.headers).toHaveProperty("x-frame-options");
    expect(response.headers).toHaveProperty("x-xss-protection");
  });

  it("should handle rate limiting", async () => {
    let limitReached = false;
    for (let i = 0; i < 10; i++) {
      const response = await request(app).get("/health");
      if (response.status === 429) {
        limitReached = true;
        expect(response.status).toBe(429);
        expect(typeof response.body).toBe("object");
        expect(response.body).not.toBeNull();
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    expect(limitReached).toBe(true);
  });
});
