/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let newSet = new Map()
    for(let i= 0; i< names.length ; i++){
        newSet.set( heights[i] , names[i])
    }
  heights = heights.sort((a, b) => b - a)
  return heights.map(x => newSet.get(x))
};