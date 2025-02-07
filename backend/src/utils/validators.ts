import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    };
    const errors = validationResult(req);
    if (errors.isEmpty()) {
     return next();
    };
    return res.status(422).json({ errors: errors.array() });
  };
};

export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is Required BOSS!"),
    body("password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("You Know BOSS, Passeword Should Contain 8 Characters Atleast"),
  ];


  export const signupValidator = [
  body("name").notEmpty().withMessage("Name is Required BOSS!"),
  ...loginValidator,
];

export const chatCompletionValidator = [
  body("message").notEmpty().withMessage("Message is Required BOSS!"),
  ...loginValidator,
];
