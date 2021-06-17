//const express = require("express");
import express from "express";
const routes = require("./routes/v1");

const app = express();

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

app.use("/v1", routes);

module.exports = app;
