/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    let newMap = new Map()
    if (!node) return null
    function inner(root) {

        if (!newMap.has(root.val)) {
            newMap.set(root.val, new Node(root.val))
            newMap.get(root.val).neighbors = root.neighbors.map(inner)
        }

        return newMap.get(root.val)
    }
 return inner(node)
};