"use strict";

const fs = require("fs");
const parser = require("./parser");
const config = require("../config/config");
const GROUND_TRUTH_PATH = config["ground_truth_path"]; // expected to be csv of numeric pairs 'id,price'

const groundTruth = (function(groundTruthPath) {
  let data = fs.readFileSync(groundTruthPath, "utf8");
  return parser.csvToObj(data);
})(GROUND_TRUTH_PATH);

module.exports = {
  groundTruthObj: groundTruth
};
