/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
let arr1 = [];
let start = 1
    for(let i = 1; i <= arr.length + k; i++){
       if(!arr.includes(i)){
        arr1.push(i)
        console.log(arr1)
       }

    }

    return arr1[k - 1]
};