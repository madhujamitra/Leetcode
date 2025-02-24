/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // let j = 0
    // for (let i = m; i < nums1.length; i++) {
    //     if (j <= n) {
    //         nums1[i] = nums2[j]
    //         j++
    //     }

    // }

    // return nums1.sort()

    nums1.splice(m)
 nums1.push(...nums2)
    return nums1.sort((a, b) => a - b)
};