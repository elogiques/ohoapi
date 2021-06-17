import express, { Router } from "express";

const merchantRoute = require("./merchant.route");
const authRoute = require("./auth.route");

const router: Router = Router();

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
