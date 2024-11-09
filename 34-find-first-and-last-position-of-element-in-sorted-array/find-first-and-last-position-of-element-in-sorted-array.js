/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let arr = []  
    for(let i = 0 ; i <= nums.length ; i++){
        if(nums[i] === target){
            arr.push(i)
        }
    }


  return arr.length === 0 ? [-1, -1] : [arr[0], arr[arr.length -1]];
};