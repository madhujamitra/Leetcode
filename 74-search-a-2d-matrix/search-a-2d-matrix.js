/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    console.log("test")
    let array_search = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === target) {
            return true
        } else if (matrix[i][0] > target) {
            array_search = i - 1;
            break;
        } else {
        array_search = matrix.length - 1;
      }
    }
    if (array_search < 0) {
        array_search = matrix.length - 1;
    }

    let low = 0
    let high = matrix[array_search].length - 1
    let mid

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);
        if (matrix[array_search][mid] === target) {
            return true
        }
        if (matrix[array_search][mid] > target) {
            high = mid - 1;

        } else {
            low = mid + 1;
        }


    }
    return false
};