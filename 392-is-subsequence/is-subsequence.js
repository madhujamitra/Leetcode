/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let index = 0;
for(let i = 0; i <t.length;){
    if(s[index] === t[i]){
        index++
        i++
    }else{
        i++
    }
}

return index == s.length



};


