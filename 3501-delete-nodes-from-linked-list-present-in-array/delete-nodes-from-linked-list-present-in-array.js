/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let newNum = new Set(nums)
    let dummy=new ListNode(0)
    let current=dummy
    while(head){
        if(!newNum.has(head.val)){
            current.next=head
            current=current.next
        }
        head=head.next
    }
    current.next=null
    return dummy.next
};