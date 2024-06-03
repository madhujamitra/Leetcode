/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let min = prices[0]
    for (let j = 1; j < prices.length; j++) {

        let max = prices[j]
        if (min > max) {
            min = max
        }
        let sub = max - min
        profit = Math.max(profit, sub)

    }
    return profit
};