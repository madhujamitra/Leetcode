/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    date = date.toString().split("-")

    date.forEach((x, index) => {
        let val = BigInt(x).toString(2);
        date[index] = val
    })

    return date.join("-")
};