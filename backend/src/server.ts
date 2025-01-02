import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { configSecurity } from "./middleware/security";
import { routes } from "./routes/index";
import { errorHandler } from "./middleware/errorHandler";

export function createServer() {
  dotenv.config();
  const app = express();

  configSecurity(app);

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.use("/api", routes);

  app.use(errorHandler);

  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "Ok",
    });
  });

  return app;
}

if (process.env.NODE_ENV !== "test") {
  const app = createServer();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port} 🔥`);
  });
}
