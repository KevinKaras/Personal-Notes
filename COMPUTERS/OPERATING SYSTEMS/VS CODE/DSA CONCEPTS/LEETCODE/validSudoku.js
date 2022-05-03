/**
 * @param {character[][]} board
 * @return {boolean}
 */

/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 * 
 */




 var isValidSudoku = function(board) {
    const rows = {};
    const cols = {};
    const squares = {};

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];

            if (num === '.') {
                continue;
            }

            const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;
            console.log(grid)

            if (!cols[c]) {
                cols[c] = new Set();
            }
            if (!rows[r]) {
                rows[r] = new Set();
            }
            if (!squares[grid]) {
                squares[grid] = new Set();
            }

            if (rows[r].has(num) || cols[c].has(num) || squares[grid].has(num)) {
                return false;
            }

            cols[c].add(num)
            rows[r].add(num)
            squares[grid].add(num)
        }
    }
    console.log(rows)

    return true;
};