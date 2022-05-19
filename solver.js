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
 * @param {Array} arr
 * @returns {boolean} if the grid is complete
 */
function isCompletelySolved() {}

/**
 * Takes in an array, where the zeroes represent the unknown
 * squares. For every unknown square, it will recursively attempt
 * all values for that square. If a choice causes a contradiction, we exit out and
 */
function recursiveSolve(arr, posArr) {
  return arr;
}

console.log(getOneGrid());
