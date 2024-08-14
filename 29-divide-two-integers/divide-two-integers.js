/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // let val = dividend / divisor
    // val = val.toString().split(".")
    // return val[0]

        if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
     return Math.trunc(dividend / divisor);

};