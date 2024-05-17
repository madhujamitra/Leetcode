/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0
    for(let i = 0; i < operations.length ; i++){
        if(operations[i] === "X++" || operations[i] === "++X"){
            count = count + 1
        } if(operations[i] === "X--" || operations[i] === "--X"){
            count = count - 1
        }
    }

    return count
};