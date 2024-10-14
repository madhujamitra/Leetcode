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
var averageOfLevels = function (root) {

    let result = []
    let count = []



    function inner(root, level) {
        if (!root) return
        if (result.length <= level) {
            result.push(0.00)
            count.push(0)
        }
        result[level] += root.val
        count[level] += 1
        left = inner(root.left, level + 1)
        right = inner(root.right, level + 1)




    }

    inner(root, 0)
 

  return  result.map((value, index)=> value / count[index])
};