"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const merchantRoute = require("./merchant.route");
const authRoute = require("./auth.route");
const router = express_1.Router();
const defaultRoutes = [
    {
        path: "/merchants",
        route: merchantRoute,
    },
    {
        path: "/",
        route: authRoute,
    },
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
module.exports = router;
