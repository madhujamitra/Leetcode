/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let poutput = []
    let arry = []

    for (let i = 0; i < A.length; i++) {
        arry.push(A[i], B[i])
        poutput.push(findtheCommon(arry))
    }
    return poutput
};

function findtheCommon(arry) {
    console.log(arry)
    let count = 0
    for (let i = 0; i < arry.length; i++) {
        for (j = i+1; j < arry.length; j++) {
            if (i !== j) {
                if (arry[i] === arry[j]) {
                 
                    count++
                }

            }
        }

    }
    return count;

}



