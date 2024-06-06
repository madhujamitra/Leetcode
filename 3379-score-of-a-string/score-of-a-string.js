/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] !== undefined) {
            let val = s.charCodeAt(i) - s.charCodeAt(i + 1)
            let num = Math.abs(val)
            sum += num
        }
    }
    return sum
};