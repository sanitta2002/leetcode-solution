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
var reverseKGroup = function(head, k) {
    let current = head
    let prev1=null
    while(current){
        let check = current;
        let count = 0;

        while (check && count < k) {
            check = check.next;
            count++;
        }
        if (count < k) {
            if (prev1) {
                prev1.next = current;
            }
            break;
        }
        let temp=current
        let prev=null
         count=0
        while(current && count<k){
            let next=current.next
            current.next=prev
            prev=current
            current=next
            count++
        }
        if(prev1){
            prev1.next=prev
        }else{
            head=prev
        }
        prev1=temp
    }
    return head

};