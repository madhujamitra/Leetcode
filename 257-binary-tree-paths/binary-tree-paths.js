/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let arr = []


    function leefCounter(root, emptyArr) {
        if (!root) return;

        emptyArr.push(root.val)
        
        if (!root.left && !root.right) {
            return arr.push(emptyArr.join('->')) 
        } else {
        leefCounter(root.left, [...emptyArr])
        leefCounter(root.right, [...emptyArr])

        }

    }
    leefCounter(root, [])
    return arr
};