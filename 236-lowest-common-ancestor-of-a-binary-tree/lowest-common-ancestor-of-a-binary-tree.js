/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    function inner(root , p , q){
        if(!root || root === p || root === q) return root

    const left =  inner(root.left, p, q); 
    const right = inner(root.right, p, q);
    
    if(left && right) {
        return root;
    }

    if(left) return left;
    if(right) return right;
    return null;

    }
return inner(root, p , q)



};