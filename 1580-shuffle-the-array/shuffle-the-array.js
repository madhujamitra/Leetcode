/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let arry2 = nums.splice(n)
    let output = []
    for (let i = 0; i < nums.length; i++) {

        output.push(nums[i], arry2[i])

    }

    return output
};