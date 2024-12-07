import { describe, expect, it } from "@jest/globals";
import prisma from "../../services/prisma";

describe("Database connection", () => {
  it("should connect to the database", async () => {
    const user = await prisma.user.create({
      data: {
        email: "test@test.com",
        password: "hashed_password",
        role: "visitor",
      },
    });
    expect(user.email).toBe("test@test.com");
    expect(user.role).toBe("visitor");

    await prisma.user.delete({
      where: { id: user.id },
    });
  });
});
