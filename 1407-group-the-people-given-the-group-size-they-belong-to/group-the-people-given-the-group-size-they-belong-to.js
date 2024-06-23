/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {

    let newMap = new Map();
    let arr = [];
    //set the key from the elemet if the arr

    //set the value of with respect to the key 
    for (let i = 0; i < groupSizes.length; i++) {
        if (!newMap.has(groupSizes[i])) {
            newMap.set(groupSizes[i], [i]);

        } else {
            newMap.get(groupSizes[i]).push(i);
        }


    }

    //we will get the values from the newMap

    newMap.forEach((indices, size) => {
        for (let i = 0; i < indices.length; i += size) {
            arr.push(indices.slice(i, i + size));
        }
    });

    return arr
};