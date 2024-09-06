/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums.includes(target)) return -1
    const condition = (element) => element === target;
  return nums.findIndex(condition);

};