/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let newArr = accounts.map(x => addtion(x))
    return Math.max(...newArr)
};

function addtion(arr) {
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum

}