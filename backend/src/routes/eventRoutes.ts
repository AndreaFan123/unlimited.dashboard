import { Router } from "express";
import { Response, Request } from "express";
import { validateEvent } from "../middleware/validation";

const router = Router();

router.get("/", validateEvent, (req: Request, res: Response) => {
  res.status(501).json({
    message: "Not implemented yet",
  });
});

router.post("/", validateEvent, (req: Request, res: Response) => {
  res.status(501).json({
    message: "Not implemented yet",
  });
});

export default router;
