/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const rev = x.toString().split("").reverse().join();
    console.log(rev)
const val = x.toString().split("").join();
console.log(val)
    return val === rev
};