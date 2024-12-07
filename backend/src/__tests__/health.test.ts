import request from "supertest";
import app from "../server";
import { describe, expect, it } from "@jest/globals";

describe("Health Check endpoint", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
