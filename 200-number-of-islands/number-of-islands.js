/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

if(!grid || grid.length === 0) return 0;
let count = 0;
for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
        if(grid[i][j] === "1"){
          count++;
          checkForWater(grid, i , j)
        }
    }

 
}
   return count
};

function checkForWater(grid, i , j){
 if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
        return;
    }

     grid[i][j] = '0';

    checkForWater(grid, i + 1 , j) 
    checkForWater(grid, i - 1 , j) 
    checkForWater(grid, i , j + 1 ) 
    checkForWater(grid, i , j - 1) 
}
