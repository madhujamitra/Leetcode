/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {


    let newMap = new Map();
    let newArr = []

    for (let i = 0; i < s.length; i++) {
        let j = i + 10

        if (j <= s.length) {
            let val = s.slice(i, j)
            if (newMap.has(val)) {
                newMap.set(val, newMap.get(val) + 1)

            } else {
                newMap.set(val, 1)
            }
        }



    }

    for (const [key, value] of newMap) {
        if (value >= 2) {
            newArr.push(key)
        }
    }


    return newArr

};