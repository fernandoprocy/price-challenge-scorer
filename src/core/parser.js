const assert = require('assert');
const config = require('../config/config')

const csvToObj = function(data) { // payload is the raw string payload
    let result = {}
    const dataArray = data.split(/\r?\n/);
    const header = dataArray.shift();
    assert.equal(config["column_header_names"], header); // TODO add proper validation and remove hardcoded column names

    let idPricePair;
    dataArray.forEach((item, index) => {
        idPricePair = item.split(',');
        result[idPricePair[0]] = idPricePair[1];           
    })
    return result;
}

module.exports = {
    csvToObj: csvToObj
}