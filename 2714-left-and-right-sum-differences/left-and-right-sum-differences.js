/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {

    let leftArr = []
    let rightArr = []
    let ans = []
    leftArr[0] = 0
    rightArr[0] = 0

    for (let i = 0, j = nums.length - 1; i < nums.length && j >= 1; i++, j--) {
        leftArr[i + 1] = leftArr[i] + nums[i]
        rightArr[i + 1] = rightArr[i] + nums[j]
    }

    rightArr = rightArr.reverse()
    for (let k = 0; k < nums.length; k++) {
        ans[k] = Math.abs(leftArr[k] - rightArr[k])
    }

    return ans

};