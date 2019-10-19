const parser = require("../../core/parser");
var assert = require("assert");

describe("Parser", function() {
  describe("#csvToObj", function() {
    it("should return parsed object", function() {
      assert.deepEqual(parser.csvToObj("id,price\n1,10000"), { 1: 10000 });
    });

    it("should return parsed object even with more than 2 values per line", function() {
      assert.deepEqual(parser.csvToObj("id,price\n1,10000,20000"), {
        1: 10000
      });
    });
  });
});
