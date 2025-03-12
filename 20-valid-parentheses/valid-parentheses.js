/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    s = s.toString().split("")
    let stack = []
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {

        console.log(s[i])
        if (map[s[i]]) {
            stack.push(map[s[i]])
            console.log(stack)
        } else if (s[i] !== stack.pop()) {
            return false;
        }
    }
return !stack.length;
};