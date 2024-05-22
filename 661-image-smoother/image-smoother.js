/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
let arrVal = []
    for (let i = 0; i < img.length; i++) {
        let arrNew = []
        for (let j = 0; j < img[i].length; j++) {
            let arr = [
                img[i][j],
                (img[i][j + 1] !== undefined ? img[i][j + 1] : NaN),
                (img[i][j - 1] !== undefined ? img[i][j - 1] : NaN),
                (img[i + 1] !== undefined && img[i + 1][j] !== undefined ? img[i + 1][j] : NaN),
                (img[i + 1] !== undefined && img[i + 1][j + 1] !== undefined ? img[i + 1][j + 1] : NaN),
                (img[i + 1] !== undefined && img[i + 1][j - 1] !== undefined ? img[i + 1][j - 1] : NaN),
                (img[i - 1] !== undefined && img[i - 1][j] !== undefined ? img[i - 1][j] : NaN),
                (img[i - 1] !== undefined && img[i - 1][j + 1] !== undefined ? img[i - 1][j + 1] : NaN),
                (img[i - 1] !== undefined && img[i - 1][j - 1] !== undefined ? img[i - 1][j - 1] : NaN)
            ];
            let val = arr.filter(n => !isNaN(n));

            const sumWithInitial = val.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0,
            );
       
        arrNew[j] = (Math.floor(sumWithInitial/val.length))
        }
    arrVal.push(arrNew)
    }
     return arrVal
};

// 137
// 141
// 137
// 141
// 138
// 141
// 137
// 141
// 137