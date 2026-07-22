/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
   const result=[]
   let ans=[]
    let current=head;
    while(current!==null){
        result.push(current.val);
        current=current.next;
    }
    for(let i=0;i<result.length;i++){
        let found=false;
        for(let j=i+1;j<result.length;j++){
            if(result[j]>result[i]){
                ans.push(result[j]);
                found=true;
                break;
            }
        }
        if(found===false)
            ans.push(0);
    }
    return ans;
};