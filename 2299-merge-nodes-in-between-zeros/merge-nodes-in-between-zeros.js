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
var mergeNodes = function(head) {

    let node = head.next;
  let dummy = node;
  
  while (dummy !== null) {
    let sum = 0;
    while (dummy.val !== 0) {
      sum += dummy.val;
      dummy = dummy.next;
    }
    node.val = sum;
    dummy = dummy.next;
    node.next = dummy;
    node = node.next;
  }

  return head.next;
};