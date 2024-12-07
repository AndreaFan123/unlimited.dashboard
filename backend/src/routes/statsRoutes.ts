import { Router } from "express";

const router = Router();

router.get("/daily", (req, res) => {
  res.status(501).json({
    message: "Not implemented yet",
  });
});

router.get("/monthly", (req, res) => {
  res.status(501).json({
    message: "Not implemented yet",
  });
});

export default router;
