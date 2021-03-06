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
 * true if it contains no contradictions, false if it does.
 * The structure to this is similar to isCompletelySolved(), but not identical
 * @param {Array} arr
 * @returns {boolean} whether the grid contains any contradictions
 */
let containsNoContradictions = function (arr) {
  //Check if the rows are complete
  for (let i = 0; i < 9; i++) {
    let currentRow = arr[i];
    if (!containsNoMoreThanOne(currentRow)) {
      //Keep an eye on the not. We're here if we fail.
      return false;
    }
  }
  //Check if the cols are complete
  for (let i = 0; i < 9; i++) {
    let currentCol = [];
    for (let j = 0; j < 9; j++) {
      currentCol.push(arr[j][i]);
    }
    if (!containsNoMoreThanOne(currentCol)) {
      //Keep an eye on the not. We're here if we fail.
      return false;
    }
  }

  //Check if the boxes are complete
  //since the boxes aren't easily reducable with for loops
  //like the cols and rows, this looks much sloppier.

  for (let i = 0; i < 3; i++) {
    //This represents the 3x3 box-of-boxes.
    for (let j = 0; j < 3; j++) {
      let currentBox = [];
      for (let k = 0; k < 3; k++) {
        //This represents the 3x3 inner box
        for (let l = 0; l < 3; l++) {
          currentBox.push(arr[3 * i + k][3 * j + l]);
        }
      }
      if (!containsNoMoreThanOne(currentBox)) {
        //Keep an eye on the not. We're here if we fail.
        return false;
      }
    }
  }

  //If we pass all tests without failure, then return true.
  //Until the above are properly implemented, return null
  return true;
};

/**
 * Helper function for containsContradictions()
 * Verifies that a passed in 1D array representing a row/col/box contains either empty cells or
 * only one of each number. Fails if a passed in array contains more than one of any item.
 * @param {Array} arr
 */
let containsNoMoreThanOne = (arr) => {
  //For each element in the array, iterate over all following elements in the array.
  //If a repeat is found for anything other than zero, return false.
  //If we get to the end with no falsehoods, return true
  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (arr[i] != 0 && arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
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
    if (!verifyOneOfEach(currentRow)) {
      //Keep an eye on the not. We're here if we fail.
      return false;
    }
  }
  //Check if the cols are complete
  for (let i = 0; i < 9; i++) {
    let currentCol = [];
    for (let j = 0; j < 9; j++) {
      currentCol.push(arr[j][i]);
    }
    if (!verifyOneOfEach(currentCol)) {
      //Keep an eye on the not. We're here if we fail.
      return false;
    }
  }

  //Check if the boxes are complete
  //since the boxes aren't easily reducable with for loops
  //like the cols and rows, this looks much sloppier.

  for (let i = 0; i < 3; i++) {
    //This represents the 3x3 box-of-boxes.
    for (let j = 0; j < 3; j++) {
      let currentBox = [];
      for (let k = 0; k < 3; k++) {
        //This represents the 3x3 inner box
        for (let l = 0; l < 3; l++) {
          currentBox.push(arr[3 * i + k][3 * j + l]);
        }
      }
      if (!verifyOneOfEach(currentBox)) {
        //Keep an eye on the not. We're here if we fail.
        return false;
      }
    }
  }

  //If we pass all tests without failure, then return true.
  return true;
};

/**
 * Helper function for isCompletelySolved(). The parent function
 * will load up a 1D array of all the elements in a single
 * row/column/box and pass it to this in order to verify that
 * the passed-in array contains every number 1 through 9.
 * @param {Array} arr
 * @returns if the passed in aray contains every number 1 to 9
 */
let verifyOneOfEach = (arr) => {
  if (
    !(
      arr.includes("1") &&
      arr.includes("2") &&
      arr.includes("3") &&
      arr.includes("4") &&
      arr.includes("5") &&
      arr.includes("6") &&
      arr.includes("7") &&
      arr.includes("8") &&
      arr.includes("9")
    )
  ) {
    //Keep an eye on the not. We're here if we fail.
    return false;
  }

  return true;
};

/**
 * Given an incomplete array, determine all the possible values of
 * all of the unsolved boxes
 * @param {Array} arr
 */
let getPossibilities = function (arr) {
  //before we begin, make a copy of the array to work with
  let posArr = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row[j] = arr[i][j]
    }
    posArr.push(row)
  }

  //First, iterate over the array to determine the empty boxes.

  //Fill this innermost array with all the values not otherwise in that row, col, or box.
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (posArr[i][j] == 0) {
        //Once we've found an empty box, replace the zero with an array.
        posArr[i][j] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        //Now we determine what the box can be by determing what it *cant* be.
        //Define an array containing every element,
        //iterate over the current row and box, and remove elements from it

        //First, iterate over the current row.
        let currentRow = arr[i];
        for (let k = 0; k < 9; k++) {
          let locate = posArr[i][j].indexOf(currentRow[k])
          if (locate !== -1) {
            posArr[i][j].splice(locate, 1);
          }
        }

        //Second, iterate over the current col
        let currentCol = [];
        for (let k = 0; k < 9; k++) {
          currentCol.push(arr[k][j]);
        }
        for (let k = 0; k < 9; k++) {
          let locate = posArr[i][j].indexOf(currentCol[k])
          if (locate !== -1) {
            posArr[i][j].splice(locate, 1);
          }
        }

        //Third, iterate over the current box.
        let currentBox = [];
        let boxi = Math.floor(i / 3);
        let boxj = Math.floor(j / 3);
        for (let k = 0; k < 3; k++) {
          //This represents the 3x3 inner box
          for (let l = 0; l < 3; l++) {
            currentBox.push(arr[3 * boxi + k][3 * boxj + l]);
          }
        }
        for (let k = 0; k < 9; k++) {
          let locate = posArr[i][j].indexOf(currentBox[k])
          if (locate !== -1) {
            posArr[i][j].splice(locate, 1);
          }
        }
      }
    }
  }

  //once we're done, trim all the numbers out of the actual numbers
  //and replace them with empty arrays.

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!Array.isArray(posArr[i][j])) {
        posArr[i][j] = [];
      }
    }
  }
  return posArr;
};

/**
 * Takes in an array, where the zeroes represent the unknown
 * squares. For every unknown square, it will recursively attempt
 * all values for that square. If a choice causes a contradiction, we exit out and
 */
let recursiveSolve = function (arr, posArr) {
  //First, find the first un-attempted box.
  let attemptI = -1;
  let attemptJ = -1;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] == 0) {
        attemptI = i;
        attemptJ = j;
        i = 10; j = 10;//escape from for loop
      }

    }
  }


  //If we find nothing to attempt, it means we've reached the end of the array.
  //Verify completion, and return the correct array or false as needed.
  if (attemptI === -1 && attemptJ === -1) {
    if (isCompletelySolved(arr)) {
      return arr;
    }
    return false;
  }


  //If we do find something to attempt, then we must recursively iterate over all possible
  //elements that the element could be.
  for (let k = 0; k < posArr[attemptI][attemptJ].length; k++) {
    let arrCopy = [];
    for (let i = 0; i < 9; i++) {
      let row = [];
      for (let j = 0; j < 9; j++) {
        row[j] = arr[i][j]
      }
      arrCopy.push(row)
    }
    //Introduce a new element.
    arrCopy[attemptI][attemptJ] = posArr[attemptI][attemptJ][k];
    console.log(`Tried ${arrCopy[attemptI][attemptJ]} at ${attemptI}, ${attemptJ}`)

    //TODO: Contradiction testing here is buggy
    //Check if the new element causes contradictions. No sense in going down a path
    //That has no chance of resolution.
    let attempt = containsNoContradictions(arrCopy);
    if (attempt) {
      let recursiveResult = recursiveSolve(arrCopy, posArr);
      if (recursiveResult === false) {
        //The attempt failed, do nothing.
      }
      else {
        //The attempt succeded, return the solved array;
        return recursiveResult;
      }
    }




  }





  return false;


};

let first = getOneGrid()
console.log("Posibilities:")
console.log(getPossibilities(first))
console.log("Grid:")
console.log(first)
let result = recursiveSolve(first, getPossibilities(first));
console.log(result)

// Exports for mocha tests below this line
module.exports = {
  getOneGrid,
  containsNoContradictions,
  isCompletelySolved,
  recursiveSolve,
  containsNoMoreThanOne,
};
