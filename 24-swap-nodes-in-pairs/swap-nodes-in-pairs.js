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
var swapPairs = function(head) {
    if(head===null || head.next===null){
        return head
    }
    let current=head
    let sec=head.next
     current.next=swapPairs(sec.next)
     sec.next=current
     return sec
};