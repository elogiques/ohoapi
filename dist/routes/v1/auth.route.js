"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { validate } from "../../middlewares/validate";
//const validate = require('../../middlewares/validate');
const auth_controller_1 = __importDefault(require("../../controller/auth.controller"));
const router = express_1.Router();
router.get("/login", auth_controller_1.default.login);
router.get("/logout", auth_controller_1.default.logout);
/*
router.post("/login", validate(authValidation.login), authController.login);
router.post("/logout", validate(authValidation.logout), authController.logout);
*/
module.exports = router;
