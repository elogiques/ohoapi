import { Request, Response, NextFunction } from "express";
const db = require("../config/database");

const getMerchants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const { product_name, quantity, price } = req.body;

  console.log("Calling DB");

  try {
    const { rows } = await db.query(
      "SELECT MRC_NAME, LOCATION, CITY, DISTRICT FROM public.T_MERCHANTS",
      null
    );

    res.status(200).send({
      status: "000",
      err_desc: "",
      body: {
        rows,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export default { getMerchants };

/*

  rows,
  } = await db.query(
    "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
    [product_name, quantity, price]
  );

  */
