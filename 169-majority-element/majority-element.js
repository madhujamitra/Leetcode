/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let value = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!value.has(nums[i])) {
            value.set(nums[i], 1)
        } else {
            value.set(nums[i], value.get(nums[i]) + 1)
        }
    }

 
    let maxKey = null
    let maxValue = -Infinity

    value.forEach((val, key) => {
if(maxValue < val){
    maxValue = val
    maxKey = key 
}
    })

    return maxKey
    //const output = [...value.values()].sort((a, b) => a - b);
    //console.log(output)
    //return output[0]
};