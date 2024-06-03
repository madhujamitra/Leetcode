/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
// let val = _.uniq(nums)
// nums.length = 0;
// nums.push(...val)
for(let i = 0; i < nums.length;){
    if(nums[i] === nums[i + 1]){
nums.splice((i+ 1), 1)
    }else{
        i++
    }
}

};