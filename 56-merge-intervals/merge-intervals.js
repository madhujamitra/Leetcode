/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    let output = []
    if (intervals.length === 1) return intervals

    intervals.sort((a, b) => a[0] - b[0])

    let prev = intervals[0]


    for (let j = 1; j < intervals.length; j++) {
        let interval = intervals[j]

        if (interval[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], interval[1])
        } else {
            output.push(prev)
            prev = interval
        }


    }

    output.push(prev)

    return output
};