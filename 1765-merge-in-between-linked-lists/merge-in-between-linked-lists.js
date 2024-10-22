/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let left
    let right = list1

    for (let i = 0; i < b+1 ; i++) {
        if (i === a - 1) {
            left = right
        }
        right = right.next
    }

    left.next = list2
    let temp = list2
    while (temp.next !== null && temp !== null) {
        temp = temp.next
    }

    temp.next = right

    return list1

};