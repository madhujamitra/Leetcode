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
 * @return {number}
 */
var countNodes = function (root) {
let count = 0
    function counter(root) {
        if (!root) return count
        count++
        let leftSide = counter(root.left)
        let rightside = counter(root.right)
    }
counter(root)
return count
};