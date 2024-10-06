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
var diameterOfBinaryTree = function (root) {
    let count = 0
    function counter(root) {
        if (!root) return 0;
        let left = counter(root.left)
        let right = counter(root.right)
        let diameter = left + right
        count = Math.max(count, diameter)
        return 1 + Math.max(left, right)
    }

    counter(root);
    return count
};