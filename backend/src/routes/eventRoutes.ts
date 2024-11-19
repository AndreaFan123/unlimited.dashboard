// Define API routes

import { Router } from "express";
import { eventController } from "../controller/eventController";

const router = Router();

// POST
router.post("/events", eventController.postEvents);

// GET
router.get("/events", eventController.getEvents);

export default router;
