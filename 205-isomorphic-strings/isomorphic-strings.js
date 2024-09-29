/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    s = s.split("")
    t = t.split("")
    let newSet = new Map();
    let newRev = new Map()

    for (let i = 0; i < s.length; i++) {
        console.log('dd')
        if (newSet.has(s[i])) {
            console.log('ddrr')
            if (newSet.get(s[i]) !== t[i]) {
                return false
            }
        } else {
            newSet.set(s[i], t[i]);
        }

        if (newRev.has(t[i])) {
            console.log('ddrr')
            if (newRev.get(t[i]) !== s[i]) {
                return false
            }
        } else {
            newRev.set(t[i], s[i]);
        }
    }
    return true
};