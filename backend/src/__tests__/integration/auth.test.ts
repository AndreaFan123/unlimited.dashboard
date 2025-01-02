// import request from "supertest";
// import { createServer } from "../../server";
// import prisma from "../../services/prisma";
// import { beforeEach, afterEach } from "node:test";
// import { describe, expect, it } from "@jest/globals";
// import e from "express";

// describe("Auth integration", () => {
//   const app = createServer();
//   beforeEach(async () => {
//     await prisma.user.deleteMany();
//   });

//   afterEach(async () => {
//     await prisma.$disconnect();
//   });

//   describe("Registration", () => {
//     it("should register a user", async () => {
//       const res = await request(app)
//         .post("/api/auth/register")
//         .send({ email: "test@test.com", password: "password" });

//       expect(res.status).toBe(201);
//     });
//   });
// });
