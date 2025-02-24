/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = new Map();
    for (i = 0; i < nums.length;) {
        if (!count.has(nums[i])) {
            count.set(nums[i], 1)
            i++
        } else if (count.get(nums[i]) < 2) {
            count.set(nums[i], count.get(nums[i]) + 1)
            i++
        } else {
            nums.splice(i, 1);
        }
    }
    //return nums

};