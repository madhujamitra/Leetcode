/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    let max = 0;

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
                max = Math.max(max, nums[i] ^ nums[j]);
            }
        }
    }
return max
};

