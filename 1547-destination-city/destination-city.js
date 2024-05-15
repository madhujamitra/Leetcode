/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
    let pathMap = new Map()
    for(let i = 0; i<paths.length; i++){
        pathMap.set(paths[i][0] , paths[i][1])
    }


const val = paths.map(x => x.filter(y => !pathMap.has(y)))

const next = val.filter(arr => arr.length > 0);

return next[0][0]
};