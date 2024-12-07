import { Router } from "express";
import eventRoutes from "./eventRoutes";
import authRoutes from "./authRoutes";
import statsRoutes from "./statsRoutes";

const router = Router();

router.use("/events", eventRoutes);
router.use("/auth", authRoutes);
router.use("/stats", statsRoutes);

export { router as routes };
