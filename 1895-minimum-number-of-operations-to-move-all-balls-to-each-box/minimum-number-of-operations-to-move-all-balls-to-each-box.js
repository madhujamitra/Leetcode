/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let output = []
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i]
        let sum = 0
        for (let j = 0; j < boxes.length; j++) {
            if (i != j) {
                if (boxes[j] === "1") {
                    let diff = Math.abs(i - j)
                    sum = sum + diff
                }
            }
        }
        output.push(sum)
    }
    return output

};