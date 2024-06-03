/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let val = _.uniq(nums)
nums.length = 0;
nums.push(...val)
};