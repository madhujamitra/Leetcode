/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    moves = moves.toString().split("")

  let valu = {
    l : 0,
    r: 0,
    u: 0,
    d: 0
  }

    for(let i = 0; i < moves.length; i++ ){
        if (moves[i] === "L") {
            valu["l"]++;
        } else if (moves[i] === "R") {
            valu["r"]++;
        } else if (moves[i] === "U") {
            valu["u"]++;
        } else if (moves[i] === "D") {
            valu["d"]++;
        }
    }

    return valu["l"] === valu["r"] && valu["u"]=== valu["d"]
};