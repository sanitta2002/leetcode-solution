/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root===null) return []
    let queue=[root]
    let res=[]
    while(queue.length>0){
        let a=queue.length
        let b=[]
        for(let i=0;i<a;i++){
            let current=queue.shift()
        b.push(current.val)
        if(current.left!==null){
            queue.push(current.left)
        }
        if(current.right!==null){
            queue.push(current.right)
        }
     }
       
     res.push(b)
    }
    return res
};