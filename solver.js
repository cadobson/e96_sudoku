/**
 * Current: gets the first grid in the file, parses it into
 * a readable 2d array, and returns the array.
 * Planned: get the next unsolved grid
 * @returns {Array} The first grid in the text file.
 */
function getOneGrid() {
  let arr = [];

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

console.log(getOneGrid());
