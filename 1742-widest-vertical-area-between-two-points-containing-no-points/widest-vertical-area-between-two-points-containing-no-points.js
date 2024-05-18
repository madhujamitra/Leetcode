/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    let newArr = new Array();
    let value = []
    for (let i = 0; i < points.length; i++) {
        newArr.push(points[i][0])
    }

    newArr.sort((a, b) => a - b)

    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j+ 1] !== undefined) {
            let val = newArr[j + 1] - newArr[j]
            value.push(val)
        }
    }

    return Math.max(...value)
};