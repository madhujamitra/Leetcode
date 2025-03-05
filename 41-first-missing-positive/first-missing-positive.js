/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let val = nums.filter(n => n> 0).sort((a , b) => a - b)
    let newArr = _.uniq(val)
    let start = 1
    let i = 0
while(i < newArr.length){
    if(newArr[i] > start){
        return start
    } else {
        start = start + 1
    }
    i++
}

return start

};