/*
Given the roots of two binary trees root and subRoot, return true if 
there is a subtree of root with the same structure and node values of subRoot 
and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all
 of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 
*/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

//input: a tree and potentioal subtree
//output: boolean
//  var isSubtree = function(root, subRoot) {

// };

// //create a helper function dfs that take a root and subroot
// const DFS = (q, p) =>{
//         //if not root and not subroot return true
//     if (!q && !p) return true; 
//         //if either not root or not subroot or root.val does match subroot.val
//     if (!p || !q || p.val !== q.val) return false; 
//             //return false

//         //recursive: return dfs helper function with root.left, and subroot.left AND root.right and 
//         //subroot.right
//     return DFS(q.left, p.left) && DFS(q.right, p.right)

// }

const isSameTree = (a, b)=>{
    if (!a && !b) return true;
    if (a && !b) return false;
    if (b && !a) return false;
    if (a.val === b.val) return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

var isSubtree = function(root, subRoot) {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};