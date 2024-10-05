/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let board = new Array(n).fill("").map(() => new Array(n).fill("."))
    let count = 0

    count = backtracking(board, 0, n, count)

    return count
};


function backtracking(board, row, n, count) {
    console.log(count)
    if (row === n) {
        count++
        return count;
    }
    for (let col = 0; col < n; col++) {
        if (safelocation(board, row, col, n)) {
            board[row][col] = 'Q'
            count = backtracking(board, row + 1, n, count);  
            board[row][col] = '.';
        }
    }
return count
}

function safelocation(
    board,
    row,
    col,
    n

) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }

    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }

    return true;


}