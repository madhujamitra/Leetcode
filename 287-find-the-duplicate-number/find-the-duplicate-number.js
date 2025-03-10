/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let newMap = new Map();

    for(let i = 0; i < nums.length; i++){
        if(newMap.has(nums[i])){
            return nums[i]
        } else {
          newMap.set(nums[i])  
        }
    }
};