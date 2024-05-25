/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let newArr = []
    s = s.split(" ")
    for (let i = 0; i < s.length; i++) {
        let val = s[i].split("");
        let number = val.pop()
        newArr[number - 1] = val.join("")
    }
    return newArr.join(" ")
};

