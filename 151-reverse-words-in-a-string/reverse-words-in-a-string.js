/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s =  s.trim().split(" ").reverse();
    return s.join(" ").replace( /\s\s+/g , ' ')

};