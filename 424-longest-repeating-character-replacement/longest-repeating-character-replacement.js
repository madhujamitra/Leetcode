/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0;
    let right = 0;

    let window = 0
    let count = 0;
    const visted = {}
    while (right < s.length) {
        const char = s[right]

        visted[char] = visted[char] ? visted[char] + 1 : 1

        count = Math.max(count, visted[char])

        while (right - left + 1 - count > k) {
            visted[s[left]]--;
            left++
        }
        right++
    }



return right - left



};