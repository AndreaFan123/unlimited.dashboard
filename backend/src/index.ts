import express from "express";
import cors from "cors";
import { config } from "./config/index";
import eventRoutes from "./routes/eventRoutes";

const app = express();

app.use(
  cors({
    origin: config.cors.origin,
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", eventRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
);

app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port} 🚀`);
});
