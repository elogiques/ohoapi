"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require("express");
const express_1 = __importDefault(require("express"));
const routes = require("./routes/v1");
const app = express_1.default();
app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
});
app.use("/v1", routes);
module.exports = app;
