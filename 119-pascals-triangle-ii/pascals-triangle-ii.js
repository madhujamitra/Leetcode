/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let newValue = [1]
    for (let i = 0; i < rowIndex; i++) {
        newValue = arr(newValue)
    }
    return newValue
};

function arr(arr) {
    let newArr = [1]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== undefined) {
            newArr.push(arr[i] + arr[i + 1])
        } else {
            newArr.push(1);
            break
        }
    }

    return newArr
}