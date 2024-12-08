/**
 * Reference:
 * 1. https://github.com/express-rate-limit/express-rate-limit
 * 2. https://helmetjs.github.io/
 */

import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { Express } from "express";

export const configSecurity = (app: Express) => {
  app.use(helmet());

  const limiter = rateLimit({
    windowMs: process.env.NODE_ENV === "test" ? 1000 : 15 * 60 * 1000,
    limit: process.env.NODE_ENV === "test" ? 3 : 100,
    handler: function (req, res) {
      res.status(429).send({
        status: "error",
        message: "Too many requests, please try again later.",
      });
    },
  });

  app.use("/api", limiter);
  app.use("/health", limiter);
};
