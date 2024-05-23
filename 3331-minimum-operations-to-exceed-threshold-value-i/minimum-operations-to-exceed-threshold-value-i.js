/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a,b) => a - b)

    for(let i = 0 ; i< nums.length; i++){
        if(nums[i] >= k){
            return i
        }
    }
};