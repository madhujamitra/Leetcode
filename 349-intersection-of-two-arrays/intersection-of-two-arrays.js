/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let arr = nums1.filter(x => nums2.includes(x))
    return _.uniq(arr)
};