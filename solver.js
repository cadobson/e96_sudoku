/**
 * Current: gets the first grid in the file, parses it into
 * a readable 2d array, and returns the array.
 * Planned: get the next unsolved grid
 * @returns {Array} The first grid in the text file.
 */
let getOneGrid = function () {
  let arr = [];

  //read the file into a string
  // get filesystem module
  const fs = require("fs");
  // using the readFileSync() function
  // and passing the path to the file
  const buffer = fs.readFileSync("p096_sudoku.txt");
  let fileContent = buffer.toString().split("");

  fileContent.splice(0, 8);

  for (let i = 0; i < 9; i++) {
    //put the first 9 elements into an array
    let thisRow = [];
    for (let j = 0; j < 9; j++) {
      thisRow.push(fileContent.shift());
    }
    arr.push(thisRow);

    //trim the \n at the end of each line
    fileContent.shift();
  }

  return arr;
};

/**
 * Determines if the provided grid contains contradictions. A contradiction is
 * defined as a single row, column, or block containing two or more of the
 * number.
 * This does NOT verify if the grid is complete.
 * true if it contains contradictions, false if not.
 * @param {Array} arr
 * @returns {boolean} whether the grid contains any contradictions
 */
let containsContradictions = function (arr) {
  return null;
};

/**
 * Determines if the grid is complete.
 * //Completeness requires:
 * 1: All rows only have one of each number
 * 2: All cols only have one of each number
 * 3: All boxes only have one of each number
 * @param {Array} arr
 * @returns {boolean} if the grid is complete
 */
let isCompletelySolved = function (arr) {
  //first, do a quick checksum
  //passing the checksum is NOT a guarentee that the grid is complete
  let checksum = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      //if any elements are zero, then the grid is incompletes
      if (arr[i][j] == 0) {
        return false;
      }
      checksum += parseInt(arr[i][j]);
    }
  }
  if (checksum != 405) {
    return false;
  }

  //Check if the rows are complete
  for (let i = 0; i < 9; i++) {
    let currentRow = arr[i];
    if (
      !(
        currentRow.includes("1") &&
        currentRow.includes("2") &&
        currentRow.includes("3") &&
        currentRow.includes("4") &&
        currentRow.includes("5") &&
        currentRow.includes("6") &&
        currentRow.includes("7") &&
        currentRow.includes("8") &&
        currentRow.includes("9")
      )
    ) {
      //Keep an eye on the not. We're here if we fail.
      return false;
    }
  }
  //Check is the cols are complete
  for (let i = 0; i < 9; i++) {
    let currentCol = [];
    for (let j = 0; j < 9; j++) {
      currentCol.push(arr[j][i]);
    }
    if (
      !(
        currentCol.includes("1") &&
        currentCol.includes("2") &&
        currentCol.includes("3") &&
        currentCol.includes("4") &&
        currentCol.includes("5") &&
        currentCol.includes("6") &&
        currentCol.includes("7") &&
        currentCol.includes("8") &&
        currentCol.includes("9")
      )
    ) {
      //Keep an eye on the not. We're here if we fail.
      return false;
    }
  }

  //Check if the boxes are complete

  //If we pass all tests without failure, then return true.
  //Until the above are properly implemented, return null
  return null;
};

/**
 * Takes in an array, where the zeroes represent the unknown
 * squares. For every unknown square, it will recursively attempt
 * all values for that square. If a choice causes a contradiction, we exit out and
 */
let recursiveSolve = function (arr, posArr) {
  return arr;
};

//console.log(getOneGrid());

// Exports for mocha tests below this line
// TODO: Something about this is broken
module.exports = {
  getOneGrid,
  containsContradictions,
  isCompletelySolved,
  recursiveSolve,
};
