/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let wor1 = word1.toString().split('');
    let wor2 = word2.toString().split('');
    let total = Math.max(wor1.length, wor2.length)
    let merge = []
    let i = 0
    while (i < total) {
        if (wor1[i] !== undefined) {
            merge.push(wor1[i])
        }
        if (wor2[i] !== undefined) {
            merge.push(wor2[i])
        }
        i++
    }
        return merge.join("")
    };