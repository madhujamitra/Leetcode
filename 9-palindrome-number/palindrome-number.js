/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const rev = x.toString().split("").reverse().join();
    const val = x.toString().split("").join();

    return val === rev
};