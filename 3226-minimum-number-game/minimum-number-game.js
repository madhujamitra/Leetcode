/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    nums.sort((a, b) => a - b)
    console.log(nums)
    let arr = []
    let newArr = [...nums]

    for (let i = 0; i < nums.length; i + 1) {
        if (newArr[i] !== undefined) {
            let Al = newArr.shift()
            let bob = newArr.shift()
            arr.push(bob, Al)
        } else {
            break
        }

    }

    return arr
};