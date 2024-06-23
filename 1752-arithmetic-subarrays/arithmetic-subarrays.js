/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    let result = []
    for (let i = 0; i < l.length; i++) {
        let newarr = nums.slice(l[i], r[i] + 1)
        result.push(sequence(newarr))
    }
    return result
};
function sequence(arr) {
    arr.sort((a, b) => a - b)
    let difference = arr[1] - arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        let val = arr[i + 1] - arr[i]
        if (val !== difference) {
            return false
        }
    }

    return true

}