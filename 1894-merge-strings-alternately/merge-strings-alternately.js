/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    word1 = word1.toString().split("")
    word2 = word2.toString().split("")

    let n = word1.length
    let m = word2.length
    let output = []

    if (n === 0) return word2
    if (m === 0) return word1

    let len = n > m ? n : m

    for(let i = 0; i < len; i++) {
        if (n > 0) {
            output.push(word1[i])
            n--
        }
        if (m > 0) {
            output.push(word2[i])
            m--
        }
    }
return output.join("")
};