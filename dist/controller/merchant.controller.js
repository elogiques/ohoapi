"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../config/database");
const getMerchants = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const { product_name, quantity, price } = req.body;
    console.log("Calling DB");
    try {
        const { rows } = yield db.query("SELECT MRC_NAME, LOCATION, CITY, DISTRICT FROM public.T_MERCHANTS", null);
        res.status(200).send({
            status: "000",
            err_desc: "",
            body: {
                rows,
            },
        });
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = { getMerchants };
/*

  rows,
  } = await db.query(
    "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
    [product_name, quantity, price]
  );

  */
