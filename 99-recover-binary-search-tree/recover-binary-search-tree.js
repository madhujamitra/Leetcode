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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let prev = null
    let node1 = null
    let node2 = null

    function checker(root) {
        if (!root) return
        checker(root.left)

        if (prev && prev.val > root.val) {
            if (!node1) node1 = prev
            node2 = root
        }
        prev = root
        checker(root.right)
    }

    checker(root)
    if (node1 && node2) {
        let temp = node1.val;
        node1.val = node2.val;
        node2.val = temp;
    }
};