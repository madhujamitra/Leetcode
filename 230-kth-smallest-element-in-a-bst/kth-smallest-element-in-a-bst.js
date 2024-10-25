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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let result = null

    function inner(root) {
        if (!root || k === 0) return;
        inner(root.left)
        k--;
        if (k === 0) {
            result = root.val;
            return;
        }
        inner(root.right)
    }

    inner(root)

    return result
};