# Christopher's Sudoku Solver

## Background

Sudoku is a puzzle game. There is a 9x9 grid, each of which contains a number 1 through 9 or is blank to indicate a yet-unknown number. Each row, column, and 3x3 box may contain only one of each number.

## Instructions

Download the zip or clone the repo.

Execute the solver using `node solver.js`

Execute tests using `mocha` (requires mocha to be installed)

## Details

The solution method is as follows:

1. Produce a grid of all possibile values for the unknown cells.
2. Find the first unknown cell
   1. If there is no first unknown cell, we're at the end of the grid. Verify correctness, return true/false.
3. Assign the first unknown cell to be one of the possible values from step (1).
   1. Check and see if the possible value causes a contradiction with previously assigned values. If it causes a contradiction, skip it.
4. Having assigned a possible value to the first unknown cell, recursively call the solution method at step (2) until we either determine the unique solution, determine a possible solution, or determine that there is no solution for the given grid.

Unsolved puzzles are stored in the file p096_sudoku.txt. Each grid contains a header to indicate the grid index. The puzzle is stored as a plaintext grid of 9x9 numbers 1 through 9, with zeros representing unknown values.

I made this for Project Euler, which is sort of like a lower-key math version of LeetCode that I got into back in college.

## Further Work

This code is in desperate need of a refactor. Specific planned improvements include:

- Writing tests for getPossibilities
- Enabling the solver to read more than just the first grid
- Remove repetitive code (there's a lot of it!)
- Fix shallow copy logic. It's currently bulky and can be cleaned up.
- Compartmentalize code.
- Write jdocs

I'll probably also refactor this using classes as I progress in my current course of study.

This is a personal project I'm doing for my own education, so I'm not open to pull requests. If you would like to modify and improve the code, feel free to fork it yourself.
