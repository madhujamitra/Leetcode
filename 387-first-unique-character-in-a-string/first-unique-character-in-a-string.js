/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let counter = new Map()

    for (let i = 0; i < s.length; i++) {
        counter[s[i]] = (counter[s[i]] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        if (counter[s[i]] === 1) {
            console.log(i);
            return i;
        }
    }
    return -1;
};