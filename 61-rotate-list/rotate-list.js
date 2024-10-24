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
var rotateRight = function (head, k) {

    if (!head || !head.next) return head

    let length = 1
    let tail = head

    while (tail.next) {
        tail = tail.next
        length++
    }

    tail.next = head

    k = length - k % length

    for (let i = 0; i < k; i++) {
        console.log(head)
        tail = tail.next
        head = head.next
    }

    tail.next = null
    return head

};