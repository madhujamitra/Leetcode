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
var isValidBST = function (root) {
    function checker(node, min, max) {
        if (!node) return true; // Base case: an empty node is valid

        // Check if the current node's value violates the BST properties
        if (node.val <= min || node.val >= max) {
            return false;
        }

        // Recursively check the left and right subtrees
        // Left subtree: max is updated to the current node's value
        // Right subtree: min is updated to the current node's value
        return checker(node.left, min, node.val) && checker(node.right, node.val, max);
    }

    // Start the recursion with the entire range of valid values
    return checker(root, -Infinity, Infinity);
};
