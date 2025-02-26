/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let grouping = new Map();
    let result = [];


    for (let i = 0; i < groupSizes.length; i++) {
        if (!grouping.has(groupSizes[i])) {
            grouping.set(groupSizes[i], []);
        }
        grouping.get(groupSizes[i]).push(i);

        
        if (grouping.get(groupSizes[i]).length === groupSizes[i]) {
            result.push(grouping.get(groupSizes[i]));
            grouping.set(groupSizes[i], []); 
        }
    }

    return result;
};