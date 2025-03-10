/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    s = s.toString().split("")
    let newMap = new Map()
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (newMap.has(s[i])) {
            newMap.set(s[i], newMap.get(s[i]) + 1)
        } else {
            newMap.set(s[i], 1)
        }

    }
  for (let i = 0; i < s.length; i++) {
        if (newMap.get(s[i]) === 1) {
            return i; // Return the index of the first unique character
        }
    }

    return -1
    


};