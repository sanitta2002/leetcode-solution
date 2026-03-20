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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let values = [];

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        values.push(node.val);
        inorder(node.right);
    }

    inorder(root);

    let dummy = new TreeNode(0);
    let current = dummy;

    for (let val of values) {
        current.right = new TreeNode(val);
        current = current.right;
    }

    return dummy.right;
    
};