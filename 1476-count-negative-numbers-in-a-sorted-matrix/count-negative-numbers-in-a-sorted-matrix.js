/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            let val = 0
            if(val > grid[i][j]){
                count++
            }
        }
    }
    return count
};