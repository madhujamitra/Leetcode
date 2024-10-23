/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    let newSet = new Set()
    function inner(index) {
        if (arr[index] === 0) return true
        if (index < 0 || index >= arr.length) return false
        if (newSet.has(index)) {
            return false;

        } else {
            newSet.add(index)
        }

        return inner((index + arr[index])) || inner((index - arr[index]))
    }
    return inner(start)

};