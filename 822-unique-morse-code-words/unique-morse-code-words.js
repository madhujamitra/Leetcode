/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if(words.length === 1 ) return words.length

    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let newArr = []
    let setValue = new Map()

    for(let i = 0; i<26;i++){
       setValue.set(alpha[i], code[i])
    }

    for(let j = 0; j<words.length ; j++){
        let newWord = words[j].split("");
        let changeWord = newWord.map((x) => setValue.get(x));
        newArr.push(changeWord.join(""))
       // console.log(newArr)

        
    }
//console.log(newArr)
    //i need to filter the same value

    //const result = newArr.filter((item, index) => newArr.indexOf(item) !== index);
    const result = _.uniq(newArr , false)

 

    return result.length

};