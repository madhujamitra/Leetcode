/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort()
    console.log(nums)
    let  i = 0
    let output = null
    if(nums.length == 1) return nums[i]
    while(i < nums.length){
        if (nums[i] == nums[i + 1]) {
             i += 2
        } else {
         return nums[i]
         break
        }
    }

};