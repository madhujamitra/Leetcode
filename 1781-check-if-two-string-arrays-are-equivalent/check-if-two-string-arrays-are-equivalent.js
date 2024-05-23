/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let val1 = word1.reduce((a, b) => a+ b , 0)
    let val2 = word2.reduce((a, b) => a+ b , 0)
    //let val2 = [...word2]

    return val1 === val2
};