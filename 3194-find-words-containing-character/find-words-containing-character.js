/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let newArr = [];
    for( let i = 0; i<words.length; i++){
        let val = words[i].split("");
        if(val.includes(x)){
            newArr.push(i)
        }
    }

    return newArr
};