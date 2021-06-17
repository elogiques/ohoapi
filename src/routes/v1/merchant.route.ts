import { Router } from "express";

import merchantController from "../../controller/merchant.controller";

const merchantRoute = Router();

merchantRoute.get("/", merchantController.getMerchants);

module.exports = merchantRoute;
