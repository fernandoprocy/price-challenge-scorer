"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const gt = require("./src/core/ground-truth");
const scorer = require("./src/services/calculate-score");
const parser = require("./src/core/parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: "*/*", limit: "200kb" }));

app.post("/score", (req, res, _) => {
  const payload = req.body;
  const parsedYPred = parser.csvToObj(payload);
  res.json(
    JSON.stringify(scorer.calculateScore(gt.groundTruthObj, parsedYPred))
  );
});

module.exports = app;
