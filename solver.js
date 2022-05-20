/**
 * Current: gets the first grid in the file, parses it into
 * a readable 2d array, and returns the array.
 * Planned: get the next unsolved grid
 * @returns {Array} The first grid in the text file.
 */
function getOneGrid() {
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
}

/**
 * Determines if the provided grid contains contradictions. A contradiction is
 * defined as a single row, column, or block containing two or more of the
 * number.
 * This does NOT verify if the grid is complete.
 * true if it contains contradictions, false if not.
 * @param {Array} arr
 * @returns {boolean} whether the grid contains any contradictions
 */
function containsContradictions(arr) {}

/**
 * Determines if the grid is complete.
 * //Completeness requires:
 * 1: All rows only have one of each number
 * 2: All cols only have one of each number
 * 3: All boxes only have one of each number
 * @param {Array} arr
 * @returns {boolean} if the grid is complete
 */
function isCompletelySolved(arr) {
  //first, do a quick checksum
  let checksum = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      //if any elements are zero, then the grid is incompletes
      if (arr[i][j] == 0) {
        return false;
      }
      checksum += arr[i][j];
    }
  }
  if (checksum != 405) {
    return false;
  }
  //passing the checksum is NOT a guarentee that the grid is complete
}

/**
 * Takes in an array, where the zeroes represent the unknown
 * squares. For every unknown square, it will recursively attempt
 * all values for that square. If a choice causes a contradiction, we exit out and
 */
function recursiveSolve(arr, posArr) {
  return arr;
}

console.log(getOneGrid());

// Exports for mocha tests below this line
