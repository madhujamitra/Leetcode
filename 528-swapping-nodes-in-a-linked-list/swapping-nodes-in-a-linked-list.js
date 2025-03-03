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
var swapNodes = function (head, k) {
    let arr = []

    while (head) {
        arr.push(head.val);
        head = head.next;
    }


    temp = arr[k - 1]
    arr[k - 1] = arr[arr.length - k]
    arr[arr.length - k] = temp



    let dummy = new ListNode(0)
    let pointer = dummy
    arr.forEach((x) => {
    
        pointer.next = new ListNode(x)

        pointer = pointer.next
    })

    return dummy.next
};