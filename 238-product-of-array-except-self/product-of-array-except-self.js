/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length;
    const result = new Array(length).fill(1); 

    let leftProduct = 1;
    for (let i = 1; i < length; i++) {
        leftProduct *= nums[i - 1];
        result[i] *= leftProduct;
    }


    let rightProduct = 1;
    for (let i = length - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        result[i] *= rightProduct;
    }

    return result;

};