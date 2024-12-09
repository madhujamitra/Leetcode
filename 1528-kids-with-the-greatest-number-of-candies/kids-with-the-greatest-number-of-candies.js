/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    function proccess(a, value) {
        let sum = a + value
        let output = candies.every(v => v <= sum)
        return output
    }

    let value = candies.map((value, index) => proccess(value, extraCandies))
    return value
};