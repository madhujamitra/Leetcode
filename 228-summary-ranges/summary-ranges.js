/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    let newArr = []
    let start = nums[0]
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] + 1 === nums[i]) continue;
        if (start === nums[i - 1]) {
            newArr.push(`${start}`)
        } else {
            newArr.push(`${start}->${nums[i - 1]}`);
        }
        start = nums[i]
    }




    return newArr
};