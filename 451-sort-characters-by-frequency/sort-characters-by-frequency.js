/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let newMap = new Map()

    s = s.toString().split("")

    s.forEach((val, index) => {
        if (newMap.has(val)) {
            newMap.set(val, newMap.get(val) + 1)
        } else {
            newMap.set(val, 1)
        }
    })



    let sortedByValues = new Map([...newMap.entries()].sort((a, b) => b[1] - a[1]));
  

    let output = []

    sortedByValues.forEach((value, key ,index) => {

        for (let i = 0; i < sortedByValues.get(key); i++) {
            output.push(key)
           
        }
    })

    return output.join("")
};