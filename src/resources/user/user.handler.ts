import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

interface AuthenticationResponseData {
  id: string;
  email: string;
  password: string;
  admin: boolean;
}

const users: Array<AuthenticationResponseData> = [];

export async function signUpUserHandler(req: Request, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).send({ errors: errors.array() });
  }

  const user = {
    id: `${users.length}`,
    email: req.params.email,
    password: req.params.password,
    admin: false,
  };
  users.push(user);

  console.log(users);

  return res.status(200).send({});
}

export async function loginUserHandler(req: Request, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).send({ errors: errors.array() });
  }

  const user = {
    id: `${users.length}`,
    email: req.params.email,
    password: req.params.password,
    admin: false,
  };

  console.log(user);
  console.log("Login user");

  return res.status(200).send({});
}
