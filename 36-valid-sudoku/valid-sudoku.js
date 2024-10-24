/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
   for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
            if (!(rowChecker(board, i, j) && columnChecker(board, i, j) && boxChecker(board, i, j))) {
                return false
            }
        }

    }
    return true

};

function rowChecker(board, row, col) {
    let rowSet = new Set()
    for (let i = 0; i < 9; i++) {
        if (board[i][col] !== '.') {
            if (!rowSet.has(board[i][col]) && (board[i][col] >= 1 && board[i][col] <= 9)) {
                rowSet.add(board[i][col])
            } else {
                return false
            }
        }

    }
    return true
}

function columnChecker(board, row, coloum) {
    let colSet = new Set()
    for (let i = 0; i < 9; i++) {
        if (board[row][i] !== '.') {
            if (!colSet.has(board[row][i]) && (board[row][i] >= 1 && board[row][i] <= 9)) {
                colSet.add(board[row][i])
            } else {
                return false
            }
        }

    }
    return true
}

function boxChecker(board, row, coloum) {

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(coloum / 3) * 3;

    let blockSet = new Set()
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (board[r][c] !== '.') {
                if (!blockSet.has(board[r][c]) && (board[r][c] >= 1 && board[r][c] <= 9)) {
                    blockSet.add(board[r][c])
                } else {
                    return false
                }
            }
        }
    }
    return true
}
