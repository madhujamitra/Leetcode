/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (a) {

    let stack = [];
    for (let i = 0; i < a.length; i++) {
        while (stack.length > 0 && a[i] < 0 && stack[stack.length - 1] > 0) {
            let diff = a[i] + stack[stack.length - 1]
            if (diff < 0) {
                stack.pop()
            } else if (diff === 0) {
                stack.pop()
                a[i] = 0
            } else {
                a[i] = 0

            }
        } 
        
        if(a[i]!== 0) {
            stack.push(a[i])
        }

    }
return stack

}