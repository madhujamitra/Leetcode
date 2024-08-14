/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                let arr = [nums[i], nums[j], nums[left], nums[right]].sort((a, b) => a - b);
                const includesArray = result.some(item => JSON.stringify(item) === JSON.stringify(arr));
                if (sum === target && !includesArray) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // Move left and right pointers to skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            // for (let k = j + 1; k < nums.length; k++) {
            //     for (let l = k + 1; l < nums.length; l++) {
            //         let sum = nums[i] + nums[j] + nums[k] + nums[l]
            //         let arr = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b);
            //         const includesArray = result.some(item => JSON.stringify(item) === JSON.stringify(arr));
            //         if (sum === target && !includesArray) {
            //             result.push(arr)
            //         }
            //     }
            // }
        }
    }

    return result
};