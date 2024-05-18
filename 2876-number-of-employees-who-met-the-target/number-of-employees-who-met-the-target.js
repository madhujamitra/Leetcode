/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
 let arr =    hours.filter(x => x >= target);
 return arr.length
};