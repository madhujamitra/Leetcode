/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    let arrNew = []
    for (let j = 0; j < m; j++) {
        let arr = []
        for (let i = 0; i < n; i++) {
            if (original[i] === undefined) {
                return [];
            } else {
                arr.push(original[i])
            }

        }

        original.splice(0, n);
        arrNew.push(arr)
    }
    console.log(original)
    if (original.length === 0) {
        return arrNew
    } else {
        return []
    }


};