'''
You are given the root of a binary tree with unique values, 
and an integer start. At minute 0, an infection starts from the node with value start.

Each minute, a node becomes infected if:

The node is currently uninfected.
The node is adjacent to an infected node.
Return the number of minutes needed for the entire tree to be infected.

Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4
Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.

Input: root = [1], start = 1
Output: 0
Explanation: At minute 0, the only node in the tree is infected so we return 0.

'''




'''
input: bt
output: integer

create adjacency list representation of tree

find the furthest distance from start to end of tree

that maximum is the amount of time it will take





'''

# Definition for a binary tree node.
class Node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from collections import deque
from typing import Optional

def array_to_binary_tree(lst):
    if not lst:
        return
    values = iter(lst)
    root = Node(next(values))
    queue = deque([root])
    while queue:
        node = queue.popleft()
        if node:
            # Get next two values from input list, and 
            #   if they are not None, create a node for them
            children = [
                None if value is None else Node(value)
                for value in (next(values, None), next(values, None))
            ]
            # Append these two to the queue, and also attach them in the tree
            queue.extend(children)
            node.left, node.right = children
    return root

'''
Convert the tree to an undirected graph to make it easier to handle.

Use BFS starting at the start node to find the distance between
 each node and the start node. The answer is the maximum distance.
'''
class Solution:
    def amountOfTime(self, root: Optional[Node], start: int) -> int:
        if root.val == start:
            return 0
        adjList = {}
        Q = [root]
        while Q:
            curr = Q.pop(0)
            if curr != None:
                adjList[curr.val] = [curr.left, curr.right]
                if curr.left:
                    Q.append(curr.left)
                if curr.right:
                    Q.append(curr.right)
        
    
       

        
tree = array_to_binary_tree([1,5,3,None,4,10,6,9,2])
sol = Solution()
print(sol.amountOfTime(tree, 3))


            
            





            
            
        

        