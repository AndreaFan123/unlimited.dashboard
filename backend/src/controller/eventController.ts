// Here is to handle event's logic

import { Request, Response } from "express";
import { Events } from "../types/events";
import { eventService } from "../services/eventService";

export const eventController = {
  postEvents: async (req: Request, res: Response): Promise<void> => {
    try {
      const eventData = req.body as Events;

      if (!eventData.eventType || !eventData.timestamp || !eventData.path) {
        res.status(400).json({
          success: false,
          message: "Missing Required fields.",
        });
        return;
      }
      // TODO: write data to database
      const saveEvent = await eventService.createEvent(eventData);

      res.status(200).json({
        success: true,
        message: "Event tracked successfully.",
        data: saveEvent,
      });
    } catch (error) {
      console.error("Error tracking" + (error as Error).message);
      res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  },

  getEvents: async (req: Request, res: Response): Promise<void> => {
    try {
      const events = await eventService.readEvents();
      res.status(200).json({
        success: true,
        data: [],
      });
    } catch (error) {
      console.error("Error tracking" + (error as Error).message);
      res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  },
};
