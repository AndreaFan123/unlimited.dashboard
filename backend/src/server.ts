import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { configSecurity } from "./middleware/security";
import { routes } from "./routes/index";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
configSecurity(app);
const port = process.env.PORT || 3000;

// middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server is running on port ${port} 🔥`);
  });
}

export default app;
