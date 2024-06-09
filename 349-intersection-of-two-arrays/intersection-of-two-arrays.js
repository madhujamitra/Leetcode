/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let arr1 = [...new Set(nums1)]
    let arr = arr1.filter(x => nums2.includes(x))
    return arr
};