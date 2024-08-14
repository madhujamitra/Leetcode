/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }

    // Identify the two nodes to swap
    let firstNode = head;
    let secondNode = head.next;

    // Perform the swap by recursion
    firstNode.next = swapPairs(secondNode.next);  // Recursively swap the next pairs
    secondNode.next = firstNode;  // Complete the swap by making the second node point to the first

    // The new head of this segment is the second node
    return secondNode;

    
};