"use strict";

const assert = require("assert");

const rmse = (yTrue, yPred) => {
  // Make sure both arrays have the same length
  assert.equal(
    yTrue.length,
    yPred.length,
    "Both arrays must have the same length."
  );

  var sum = 0.0;

  for (let i = 0; i < yTrue.length; i++) {
    sum += Math.pow(yTrue[i] - yPred[i], 2);
  }

  return { scorer: "rmse", value: Math.sqrt(sum / yTrue.length) };
};

module.exports = {
  rmse: rmse
};
