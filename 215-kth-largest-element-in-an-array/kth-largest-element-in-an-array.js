/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
const minPQ = new MinPriorityQueue();

for(let i = 0; i < k ; i++){
    minPQ.enqueue(nums[i])
}

for(let i  = k ; i < nums.length; i++){
    if(minPQ.front().element < nums[i]){
        minPQ.dequeue()
        minPQ.enqueue(nums[i])
    }

}

return minPQ.front().element
};