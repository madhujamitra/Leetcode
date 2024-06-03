/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let check = strs[0].split("")
    let arr = [];
    for (let i = 0; i < check.length; i++) {
        let val = strs.every(str => {
           if (str[i] === check[i]) {
                return check[i]
            }
        })

        if (val === true) {
            arr.push(check[i])
        } else if (val === false) {
            return arr.join("");
        }


    }
return arr.join("")

};