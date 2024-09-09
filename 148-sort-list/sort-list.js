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
var sortList = function (head) {
    if (head === null || head.next === null) return head

    let mid = divide(head)
    let left = head
    let right = mid.next
    mid.next = null;
    left = sortList(left)
    right = sortList(right)

    return merging(left, right)
};


function divide(head) {
   let fast = head;
    let slow = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; 
}
function merging(left, right) {

    let node = new ListNode(null)
    let dummy = node
    while (left && right) {
        if (left.val > right.val) {
            dummy.next = right
            right = right.next
        } else {
            dummy.next = left;
            left = left.next;
        }
        dummy = dummy.next
    }

    dummy.next = left || right;

    return node.next
}