/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
          numIndices = {};
    for(i = 0; i<nums.length; i++) {
        let cpmt = target - nums[i];
        if(cpmt in numIndices) {
            return [numIndices[cpmt], i];
        }
        numIndices[nums[i]] = i;
    }
    return NULL;
};