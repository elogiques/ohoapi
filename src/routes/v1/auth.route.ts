import { Router } from "express";
//import { validate } from "../../middlewares/validate";
//const validate = require('../../middlewares/validate');

import authController from "../../controller/auth.controller";

const router = Router();

router.get("/login", authController.login);
router.get("/logout", authController.logout);

/*
router.post("/login", validate(authValidation.login), authController.login);
router.post("/logout", validate(authValidation.logout), authController.logout);
*/

module.exports = router;
