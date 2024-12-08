import { Router } from "express";
import { Response, Request } from "express";
import { validateRegister, validateLogin } from "../middleware/validation";

const router = Router();

router.post("/login", validateLogin, (req: Request, res: Response) => {
  res.status(501).json({
    message: "Not implemented yet",
  });
});

router.post("/register", validateRegister, (req: Request, res: Response) => {
  res.status(501).json({
    message: "Not implemented yet",
  });
});

export default router;
