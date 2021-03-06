const assert = require("assert");

const getOneGrid = require("../solver.js").getOneGrid;
//var test = require('path_to_file').testOne:

describe("getOneGrid()", function () {
  it("should get the first grid from the text file", function () {
    let firstGrid = [
      ["0", "0", "3", "0", "2", "0", "6", "0", "0"],
      ["9", "0", "0", "3", "0", "5", "0", "0", "1"],
      ["0", "0", "1", "8", "0", "6", "4", "0", "0"],
      ["0", "0", "8", "1", "0", "2", "9", "0", "0"],
      ["7", "0", "0", "0", "0", "0", "0", "0", "8"],
      ["0", "0", "6", "7", "0", "8", "2", "0", "0"],
      ["0", "0", "2", "6", "0", "9", "5", "0", "0"],
      ["8", "0", "0", "2", "0", "3", "0", "0", "9"],
      ["0", "0", "5", "0", "1", "0", "3", "0", "0"],
    ];
    assert.deepEqual(getOneGrid(), firstGrid);
  });
});
