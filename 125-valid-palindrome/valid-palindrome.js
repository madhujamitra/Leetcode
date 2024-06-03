/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
s = s.trim().split("")
let newArr = s.filter(x => /^[a-zA-Z0-9]+$/.test(x));
console.log(newArr)
//if(newArr.length === 1) return false
return newArr.join("").toLowerCase() === newArr.reverse().join("").toLowerCase();
    
};