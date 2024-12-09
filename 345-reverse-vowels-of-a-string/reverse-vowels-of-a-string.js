/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split("")
    let start = 0
    let end = s.length - 1
    let vowels = ["a", "e", "i", "o", "u"]
    while (start <= end) {
        let st = s[start].toLowerCase()
        let en = s[end].toLowerCase()
        if (!vowels.includes(st)) {
            start++;
            continue;

        }
        if (!vowels.includes(en)) {
            end--;
            continue;
        }
         let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
 
        start++;
        end--;

    }

    return s.join("")
};