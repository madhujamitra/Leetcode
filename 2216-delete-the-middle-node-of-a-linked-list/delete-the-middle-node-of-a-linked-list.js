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
var deleteMiddle = function(head) {
    let pointer = head;
    let count = 0;
    
    // Count the number of nodes in the linked list
    while (pointer) {
        pointer = pointer.next;
        count++;
    }

    // Edge case: If there is only one node, return null
    if (count === 1) return null;

    let mid = Math.floor(count / 2);
    let point = head;
    let prev = null;

    while (mid > 0) {
        prev = point;
        point = point.next;
        mid--;
    }

 
    if (prev) {
        prev.next = point.next;
    }

    return head;
};
