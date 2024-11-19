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
var insertGreatestCommonDivisors = function(head) {
 let curr = head
  while (curr.next) {
        let next = curr.next
        let gcd = findGCD(curr.val, next.val)
        curr.next = new ListNode(gcd, next)
        curr = curr.next.next
    }
    return head

};
function findGCD(a, b){
 while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;

}