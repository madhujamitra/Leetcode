/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let graph = {}
    let result = []

    for (let i = 0; i < equations.length; i++) {
        let [num, den] = equations[i]
        if (!graph[num]) graph[num] = {}
        if (!graph[den]) graph[den] = {}
        graph[num][den] = values[i]
        graph[den][num] = 1 / values[i]
        graph[num][num] = 1
        graph[den][den] = 1
    }
    for (let k in graph) {
        for (let i in graph) {
            for (let j in graph) {
                if (graph[i][k] && graph[k][j] && !graph[i][j]) {
                    graph[i][j] = graph[i][k] * graph[k][j];
                }
            }
        }
    }
    console.log(graph)

    for (let [num, den] of queries) {
        if (graph[num] && graph[num][den]) {
            result.push(graph[num][den])
        } else {
            result.push(-1);
        }

    }

    return result
};