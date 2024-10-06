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
 * @return {boolean}
 */
var isBalanced = function (root) {

    let isBalcenaced = true

    function height(root) {
        if (root == null) return 0

        let leftSide = height(root.left)
        let rightSide = height(root.right)

        if (Math.abs(leftSide - rightSide) > 1) {
            isBalcenaced = false
        }

        return Math.max(leftSide, rightSide) + 1

    }
    height(root)

    return isBalcenaced
};  