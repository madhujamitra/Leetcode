/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
let output = [];

    function innerGameCondition(n) {
        console.log(n);
        switch (true) {
            case !isNaN(n): // Check if it's a number
                output.push(Number(n)); // Convert string to number
                break;

            case n === '+': // Sum the last two scores
                let sum = output[output.length - 2] + output[output.length - 1];
                output.push(sum);
                break;

            case n === 'D': // Double the last score
                let val = output[output.length - 1] * 2;
                output.push(val);
                break;

            case n === 'C': // Remove the last score
                output.pop();
                break;

            default:
                break;
        }
    }

    for (let i = 0; i < operations.length; i++) {
        innerGameCondition(operations[i]);
    }

    const total = output.reduce((sum, val) => sum + val, 0);

    return total;
};