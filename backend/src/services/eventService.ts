// Here is about eventControllers business logic

import { Events } from "../types/events";
import { pool } from "../config/database";
import { SocialLinkEvent, PostClickEvent } from "../types/events";

export const eventService = {
  // Create event
  createEvent: async (eventData: Events) => {
    const { eventType, timestamp, path } = eventData;

    try {
      const query = `
        INSERT INTO events (
          eventType,
          timestamp,
          path,
          platform,
          postId,
          postTitle
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
      `;

      let platform = null;
      let postId = null;
      let postTitle = null;

      switch (eventType) {
        case "social_link_click":
          platform = (eventData as SocialLinkEvent).platform;
          break;
        case "post_click":
          postId = (eventData as PostClickEvent).postId;
          postTitle = (eventData as PostClickEvent).postTitle;
          break;
      }

      const values = [eventType, timestamp, path, platform, postId, postTitle];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Error creating event" + (error as Error).message);
    }
  },

  // Get event list
  readEvents: async () => {
    try {
      const query = `
        SELECT *
        FROM events
        ORDER BY timestamp DESC
        LIMIT 10
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error("Error creating event" + (error as Error).message);
    }
  },
};
