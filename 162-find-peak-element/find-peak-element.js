/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let maxPQ =  new MaxPriorityQueue()

    for(let i = 0; i < nums.length; i++){
       maxPQ.enqueue(nums[i]) 
    }

    let largest = maxPQ.front()
    return nums.indexOf(largest.element)
};