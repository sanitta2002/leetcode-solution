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
var swapNodes = function(head, k) {
    let nodes = [];
    let current = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }

    let temp = nodes[k - 1].val;
    nodes[k - 1].val = nodes[nodes.length - k].val;
    nodes[nodes.length - k].val = temp;

    return head;
};