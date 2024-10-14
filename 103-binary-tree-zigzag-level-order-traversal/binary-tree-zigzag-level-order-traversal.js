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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    let result = new Map()

    function inner(root, level, trav) {
        if (!root) return;
        if (result.has(level)) {
            result.get(level).push(root.val);
        } else {
            result.set(level, [root.val])
        }
        inner(root.left, level + 1)
        inner(root.right, level + 1)

    }

    inner(root, 0,)
    let newValue = Array.from(result.values())
    for (let i = 0; i <= newValue.length; i++) {
        if (i % 2 !== 0 && newValue[i] ) {

            newValue[i] = newValue[i].reverse();
    
        }
    }

    return newValue

} 