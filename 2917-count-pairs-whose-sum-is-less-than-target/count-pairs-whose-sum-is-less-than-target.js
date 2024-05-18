/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let total = nums[i] + nums[j]
            if (i < j && (total < target)) {
                count++;
            }
        }
    }
    return count
};