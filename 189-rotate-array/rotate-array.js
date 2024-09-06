/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let l = nums.length
    k = k % l
    if (nums.length <= 1) {
        return nums
    }
    let temp = nums.splice(nums.length - k);
    nums.unshift(...temp);
};