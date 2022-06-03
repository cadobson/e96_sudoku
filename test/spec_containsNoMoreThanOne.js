const assert = require("assert");

const containsNoMoreThanOne = require("../solver.js").containsNoMoreThanOne;
//var test = require('path_to_file').testOne:

describe("containsNoMoreThanOne()", function () {
  it("verifies that a 1D grid contains no more than one of each number 1-9, and any number of zeroes", function () {
    let arr1 = ["1", "0", "3", "0", "2", "0", "6", "0", "0"];
    let arr2 = ["9", "0", "0", "3", "0", "5", "0", "1", "1"];
    let arr3 = ["9", "0", "0", "3", "0", "5", "0", "9", "1"];

    assert.deepEqual(containsNoMoreThanOne(arr1), true);
    assert.deepEqual(containsNoMoreThanOne(arr2), false);
    assert.deepEqual(containsNoMoreThanOne(arr3), false);
  });
});
