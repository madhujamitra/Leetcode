/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let newArr = []
    for (let i = 0; i < sentences.length; i++) {
        let val = sentences[i].split(" ").length;
        newArr.push(val)
    }
    return Math.max(...newArr)
};
