/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
    let total = 0;
    directions = directions.split("")
        for (let i = 0; i < directions.length - 1; i++) {
    
        if ((directions[i] === "R" && directions[i + 1] === "L" )) {
            total += 2; 
              console.log(total, directions[i], directions[i+1], "upper")
            directions[i] = 'S'; 
            directions[i + 1] = 'S';
          
          
        } 
       
        else if ((directions[i] === "S" && directions[i + 1] === "L") ||
                 (directions[i + 1] === "S" && directions[i] === "R" )) {
            total += 1; 
            console.log(total, directions[i], directions[i+1])
            directions[i] = 'S'; 
            directions[i + 1] = 'S';
        } else continue;

      let temp = i;

      while(directions[--temp] === 'R') total++
       while(directions[++temp] === 'L') total++

    }

    return total

};