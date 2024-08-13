/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closestSum = Infinity;

    // Loop through each element and consider all possible triplets
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                
                // Update the closest sum if the current one is closer to the target
                if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                    closestSum = sum;
                }
            }
        }
    }

    return closestSum;
};