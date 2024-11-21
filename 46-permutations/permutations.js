/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
   const ans = [];
    
    function solve(i) {
        if (i === nums.length) {
            ans.push([...nums]);
            return;
        }

        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            solve(i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]]; // Backtrack
        }
    }

    solve(0);
    return ans;
};

