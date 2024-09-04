/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let uniqueChars = new Set();
        for (let j = i; j < s.length; j++) {
            if (uniqueChars.has(s[j])) {
                break;
            } else {
                uniqueChars.add(s[j]);
            }
        }
        maxLength = Math.max(maxLength, uniqueChars.size);
    }
    return maxLength;
}