/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    let result = 0;

    function generateSubsets(index, subset) {
        if (index === nums.length) {
            if (subset.length > 0 && isBeautiful(subset, k)) {
                result++;
            }
            return;
        }

        // Include the current element
        subset.push(nums[index]);
        generateSubsets(index + 1, subset);
        subset.pop();

        // Exclude the current element
        generateSubsets(index + 1, subset);
    }

    function isBeautiful(subset, k) {
        for (let i = 0; i < subset.length; i++) {
            for (let j = i + 1; j < subset.length; j++) {
                if (Math.abs(subset[i] - subset[j]) === k) {
                    return false;
                }
            }
        }
        return true;
    }

    generateSubsets(0, []);
    return result;
};
