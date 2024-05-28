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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
var arr = []
    function inorder(root){

        if(root === null) return root
        inorder(root.left);
        
        // Visit the root
        arr.push(root.val);
        
        // Traverse the right subtree
        inorder(root.right);
    }
inorder(root)
   return arr
};