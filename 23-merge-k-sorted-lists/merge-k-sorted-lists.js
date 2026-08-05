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
var mergeKLists = function(lists) {
    let arr = []
    for(let list of lists){
        while(list){
            arr.push(list.val)
            list=list.next
        }
    }
    arr.sort((a,b)=>a-b)
    let dum = new ListNode(0)
    let current=dum
    for(let num of arr){
        current.next=new ListNode(num)
        current=current.next
    }
    return dum.next
};