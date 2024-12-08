import { body, validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      status: "error",
      errors: errors.array(),
    });
    return;
  }
  next();
};

export const eventValidationRules: ValidationChain[] = [
  body("type")
    .isIn([
      "github_click",
      "linkedin_click",
      "resume_download",
      "article_click",
    ])
    .withMessage("Invalid event type"),
  body("metadata")
    .optional()
    .isObject()
    .withMessage("Metadata must be an object"),
];

export const registerValidationRules: ValidationChain[] = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/\d/)
    .withMessage("Password must contain at least one number")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter"),
  body("role").isIn(["admin", "visitor"]).withMessage("Invalid role type"),
];

export const loginValidationRules: ValidationChain[] = [
  body("email").isEmail().withMessage("Invalid Email format").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

export const validateEvent = [...eventValidationRules, validateRequest];
export const validateRegister = [...registerValidationRules, validateRequest];
export const validateLogin = [...loginValidationRules, validateRequest];
