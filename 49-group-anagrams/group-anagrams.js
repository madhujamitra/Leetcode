/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let newMap = new Map()
    for (let i = 0; i < strs.length; i++) {
        let val = compair(strs[i])
        if (newMap.has(val)) {

            newMap.get(val).push(strs[i]);
        } else {
            newMap.set(val, [strs[i]]);
        }
    }
return [...newMap.values()]
};
function compair(value) {
    return value.split("").sort().join('')
}