/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const condition = (element) => element === target;
    return nums.findIndex(condition);
};