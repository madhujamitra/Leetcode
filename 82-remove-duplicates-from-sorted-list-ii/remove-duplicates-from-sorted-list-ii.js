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
    let dummy = new ListNode(null)
    let pointer = dummy
    while (head) {

        if (head.next && head.val === head.next.val) {

             while (head.next && head.val === head.next.val) {
                head = head.next; 
            }

           
        } else {
            console.log("here")
            pointer.next = head


            pointer = pointer.next
            console.log("here--point")

        }

        head = head.next

    }
    pointer.next = null;
    return dummy.next
};