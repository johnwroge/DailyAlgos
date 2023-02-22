/*
297. Serialize and Deserialize Binary Tree
Hard
8.5K
306
Companies
Serialization is the process of converting a data structure or object 
into a sequence of bits so that it can be stored in a file or memory
 buffer, or transmitted across a network connection link to be reconstructed
 later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no 
restriction on how your serialization/deserialization algorithm should work. 
You just need to ensure that a binary tree can be serialized to a string and 
this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a 
binary tree. You do not necessarily need to follow this format, so please be 
creative and come up with different approaches yourself.

 

Example 1:


Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 var serialize = function(root, result = []) {
    serial(root, result);

    return result;
};

const serial = (root, result) => {
    const isBase = root === null;
    if (isBase) return result.push(null);

    dfsSerialize(root, result);
}

const dfsSerialize = (node, result) => {
    result.push(node.val);
    serial(node.left, result);
    serial(node.right, result);
};
