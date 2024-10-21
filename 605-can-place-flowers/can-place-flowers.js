/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(f, n) {
    for(let i = 0; i < f.length ; i ++ ){
        if (f[i] === 0){
            if(n !== 0){
            if(f[i + 1] === 0  && f[i - 1] === 0 || f[i + 1] === undefined  && f[i - 1] === 0 || f[i + 1] === 0  && f[i - 1] === undefined || f[i + 1] === undefined  && f[i - 1] === undefined){
                f[i] = 1
                n--
            }
            }

        }
    }
    if(n === 0){
        return true 
    }else {
        return false
    }

};