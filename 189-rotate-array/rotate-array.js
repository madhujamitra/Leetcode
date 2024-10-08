/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let l = nums.length
    let min
    if (k > l) {
        k = k % l
    }
    min = l - k

    let arr = nums.splice(min)
    nums.unshift(...arr)
};