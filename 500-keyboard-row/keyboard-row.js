/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    
    let fristRow = "qwertyuiop"
    let secondRow = "asdfghjkl"
    let thridRow = "zxcvbnm"
    fristRow = fristRow.split("");
    secondRow = secondRow.split("")
    thridRow = thridRow.split("")

    let newArr = []

   for(let i = 0; i<words.length; i++){
    const val = words[i].toLowerCase().split("")
    const newVal = val.every(x => fristRow.includes(x)) || val.every(x => secondRow.includes(x)) || val.every(x => thridRow.includes(x))
    if(newVal){
        newArr.push(words[i])
    }
   }

return newArr
};