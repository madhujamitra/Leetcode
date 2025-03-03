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
var deleteDuplicates = function (head) {

    let arr = []

    while (head ) {
        arr.push(head.val)
        head = head.next
    }

    arr = [...new Set(arr)];

   let dummy = new ListNode(0);
    let current = dummy;
    
    arr.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    })

    return dummy.next;

};