/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
    let sMAP = new Map();
    let alpha = 'abcdefghijklmnopqrstuvwxyz';

    let dMAP = new Map();
    for (let k = 0; k < distance.length; k++) {
        dMAP.set(alpha[k], distance[k]);
    }

    for (let i = 0; i < s.length; i++) {
        if (!sMAP.has(s[i])) {
            sMAP.set(s[i], i);
        } else {
      
            let firstIndex = sMAP.get(s[i]);
            let actualDistance = i - firstIndex - 1;
          
            if (actualDistance !== dMAP.get(s[i])) {
                return false;
            }
        }
    }

    return true;
};