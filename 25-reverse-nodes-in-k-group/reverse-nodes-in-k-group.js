/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (head === null || head.next === null) return head

    let dummy = new ListNode(0)
    let current = dummy
    let arr = []
    while (head) {
        for (let i = 0; i < k && head; i++) {
            // here we will create a new arr where will add the word and send the value to get reveser
            arr.push(head)
            head = head.next
        }
        if (arr.length === k) {
            while (arr.length > 0) {
                current.next = arr.pop()
                current = current.next

            }
            current.next = head

        }
    }


return dummy.next

};