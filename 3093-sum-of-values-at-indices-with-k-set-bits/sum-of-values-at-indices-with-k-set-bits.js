/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let l = nums.length
    let total = 0
    for (let i = 0; i < l; i++) {
        let val = i.toString(2).split('1').length - 1
        if (val === k)
            total = total + nums[i]
    }

    return total
};

