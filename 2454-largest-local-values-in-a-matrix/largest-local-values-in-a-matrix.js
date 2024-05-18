/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {

    //find the new matrix length
    let l = grid.length
    let newL = l - 2;
    let newValue = [];
    for (let i = 0; i < newL; i++) {
        let second = []
        for (let j = 0; j < newL; j++) {

            let value = findingMaxValue(i, j, grid)
            second.push(value)
        }
        newValue.push(second);

    }

    //console.log(newValue)
    return newValue

};

function findingMaxValue(row, coloum, grid) {
    let arrArr = []
    for (let i = row; i < 3 + row; i++) {
        for (let j = coloum; j < 3 + coloum; j++) {
            arrArr.push(grid[i][j])

        }
    }
    let maxValue = Math.max(...arrArr)
    console.log(maxValue)
    return maxValue

}

