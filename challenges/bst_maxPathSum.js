/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes
 in the sequence has an edge connecting them. A node can only appear in the sequence at 
 most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.


*/

/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root, maxValue = [ -Infinity ]) {
    pathSum(root, maxValue);

    return maxValue[0];
};

const pathSum = (root, maxValue) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root, maxValue);
}

const dfs = (node, maxValue) => {
    const left = Math.max(0, pathSum(node.left, maxValue));
    const right = Math.max(0, pathSum(node.right, maxValue));
    const sum = left + right + node.val;

    maxValue[0] = Math.max(maxValue[0], sum);

    return Math.max(left, right) + node.val;
}



























