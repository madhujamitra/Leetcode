/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let newMap = new Map()
let count = 0

    for(let i = 0; i < nums.length ; i++){
        if(newMap.has(nums[i])){
            newMap.get(nums[i]).push(nums[i])
        } else {
            newMap.set(nums[i], [nums[i]])
        }
    }

    let arr = [...newMap.values()]
    arr.sort((a, b) => b.length - a.length)
     console.log(arr)
    let val = arr.map((value, index)=> { return arr[index][0]})
    return val.filter((value, index) => index < k);
};