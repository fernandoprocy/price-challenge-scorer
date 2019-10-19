const scorer = require('../core/scorers');

const calculateScore = (yTrue, yPredFull) => {
    let yTruePrices = []
    let yPredPrices = []

    Object.keys(yTrue).forEach((key) => {
        yTruePrices.push(yTrue[key]);
        yPredPrices.push(yPredFull[key]);
    })

    return scorer.rmse(yTruePrices, yPredPrices);
}

module.exports = {
    calculateScore: calculateScore
}