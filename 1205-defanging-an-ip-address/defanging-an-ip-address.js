/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
   let newArr =  address.toString().split("")
console.log(newArr)
   newArr.forEach((x, index)=> {
    if(x === '.'){
       newArr[index] = '[.]'
    }
   })

   return newArr.join("")
};