/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = '';
    let obj = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',    
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };

    // Loop through the keys in descending order
    const keys = Object.keys(obj).map(Number).sort((a, b) => b - a);
    
    while(num !== 0) {
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if(num >= key) {
                result += obj[key]; 
                num -= key;          
                break;             
            }
        }
    }

    return result;
};