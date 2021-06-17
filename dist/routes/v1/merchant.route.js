"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const merchant_controller_1 = __importDefault(require("../../controller/merchant.controller"));
const merchantRoute = express_1.Router();
merchantRoute.get("/", merchant_controller_1.default.getMerchants);
module.exports = merchantRoute;
