import { Request, Response, NextFunction } from "express";
const db = require("../config/database");

const login = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: "000",
    err_desc: "",
    body: {
      message: "Login Successful",
    },
  });
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: "000",
    err_desc: "",
    body: {
      message: "logout Successful",
    },
  });
};

export default {
  login,
  logout,
};
