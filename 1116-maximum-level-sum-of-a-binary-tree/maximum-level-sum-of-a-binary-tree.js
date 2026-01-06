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
 * @return {number}
 */
var maxLevelSum = function(root) {
    let queue=[root]
    let level=1
    let maxSum=-Infinity
    let res=1
    while(queue.length>0){
        let size=queue.length
        let sum=0
        for(let i=0;i<size;i++){
            let node=queue.shift()
            sum+=node.val

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        if(sum>maxSum){
            maxSum=sum
            res=level
        }
        level++
    }
    return res
};