/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let l = nums.length
    let arr = binaryArr(l);
    let total = 0
    for (let i = 0; i < l; i++) {
        if (arr[i] === k)
            total = total + nums[i]
    }

    return total
};

function binaryArr(l) {
    let newArr = []
    for (let i = 0; i < l; i++) {
        let val = i.toString(2).split('1').length - 1
        newArr.push(val)
    }

    return newArr
}