/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists === null || lists.next === null) return lists;

    // Let's create an array to store the values of the linked list.
    let arr = [];


    lists.forEach(l => {
        while (l) {
            arr.push(l.val)
            l = l.next
        }
    })

    // Use flat() to flatten the nested array.
    let value = arr.flat();

    // Now, we sort the array.
    value = value.sort((a, b) => a - b);

    let dummy = new ListNode(0)
    let current = dummy

    for (let val of value) {

        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next



};