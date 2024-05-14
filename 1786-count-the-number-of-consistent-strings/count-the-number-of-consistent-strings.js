/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    allowed = allowed.split("")
    let count  = 0
for(let i = 0; i < words.length; i++){
    let val = words[i].split("")
    let out = val.every( (x) => allowed.includes(x))
    console.log(out);
    count = out ? count + 1 : count;

}

return count
    
};