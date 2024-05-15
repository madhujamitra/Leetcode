/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let count = [];
    let newMAp = new Map()
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                newMAp.set(arr[i], arr[j])
            }
        }

    }
 count = arr.filter(x => {
    if(newMAp.has(x) === false){
        return x
    }
 });
 return count[k-1] === undefined ? "" : count[k-1] 
};