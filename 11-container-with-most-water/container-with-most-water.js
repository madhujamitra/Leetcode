/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let container = 0;
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let val = Math.min(height[left], height[right])
        let width = right - left
        let newCon = val * width
        container = Math.max(newCon, container)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return container
};