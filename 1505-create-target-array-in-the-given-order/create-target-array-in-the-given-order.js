/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {

    let arr = []

    for (let i = 0; i < nums.length; i++) {
        if (arr[i] !== undefined || arr[i] !== NaN) {
            arr.splice(index[i], 0, nums[i]);
        } else {
            arr[index[i]] = nums[i]
        }
    }

    return arr
};