/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {


    for (let i = 0; i < nums.length; i++) {
        let count = 1
        for (let j = i; j < nums.length -1; j++) {

            if (nums[i] === nums[j+ 1]) {
                count++
                if (count > 2) {
                    nums.splice(j + 1, 1)
                    j--
                }
            }
        }
    }

    return nums.length

};