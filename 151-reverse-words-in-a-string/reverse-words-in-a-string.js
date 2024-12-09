/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(" ").reverse().join(" ").replace(/\s\s+/g, ' ')
};