/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
let valu = nums.filter(x=> x !==val)
nums.length = 0;
nums.push(...valu)

};