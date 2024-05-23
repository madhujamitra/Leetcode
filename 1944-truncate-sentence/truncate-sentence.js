/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    s = s.split(" ")
    let arr = []
  for(let i = 0; i< k; i++){
        arr.push(s[i]);
    }

    return arr.join(" ")
};