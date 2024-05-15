/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    chars = chars.split("");
    
    let total = 0
    for (let i = 0; i < words.length; i++) {
        newChars = [...chars]; 
        let val = words[i].split("")
        const valew = val.every(x => {
            if(newChars.includes(x)){
                newChars.splice(newChars.indexOf(x), 1);
                
                return true
            }
            return false
        });
        if (valew) {
            total = total + val.length;
        }

    }
    return total
   
};