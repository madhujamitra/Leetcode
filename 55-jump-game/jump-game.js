/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = 0; // Keeps track of the farthest index reachable
    
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // If we are at a point beyond our maximum reach, return false
        maxReach = Math.max(maxReach, i + nums[i]); // Update the maximum reach
        if (maxReach >= nums.length - 1) return true; // If the last index is reachable, return true
    }

    return false; // If we exit the loop, the end is not reachable
};
