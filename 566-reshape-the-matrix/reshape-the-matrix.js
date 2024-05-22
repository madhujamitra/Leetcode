/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let arr = mat.flat()
    if (arr.length !== r * c) return mat
let newArr = []
    for (let i = 0; i < r; i++) {
newArr.push(arr.splice(0,c))

    }

    return newArr

};