/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let newArr = [...nums1, ...nums2, ...nums3]
    let newVal = _.uniq(newArr, false)
    let value = newVal.filter(x => {
        if ((nums2.includes(x) && nums3.includes(x)) || (nums1.includes(x) && nums2.includes(x)) || (nums3.includes(x) && nums1.includes(x))) {
            return x
        }
    })
    //console.log(value)
    return value
};