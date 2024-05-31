/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxVal = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;
        maxVal = Math.max(maxVal, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxVal;
};