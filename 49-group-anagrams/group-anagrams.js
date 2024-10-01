/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = []
    let newMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        let dummy = toSort(strs[i])
        if (!newMap[dummy]) {
            newMap[dummy] = [];
        }
        newMap[dummy].push(strs[i]);
    }

    return Object.values(newMap);
};

function toSort(val) {
    return val.toString().split("").sort().join()
}