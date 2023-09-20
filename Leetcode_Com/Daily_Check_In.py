'''
1658. Minimum Operations to Reduce X to Zero
Medium
5K
101
Companies
You are given an integer array nums and an integer x. In one operation, 
you can either remove the leftmost or the rightmost element from the array 
nums and subtract its value from x. Note that this modifies the array for 
future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is
 possible, otherwise, return -1.

 

Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

understand: 

Instead of looking for the minimum operations, we can find the maximum sub array
that matches the sum of the remaining elements (difference of sum n - target)
if we find a valid solution then we can return the length minus this window

design

implement



'''



class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x
        curr = 0
        max_window = -1
        l = 0

        for r in range(len(nums)):
            curr += nums[r]

            if curr == target:
                max_window = max(max_window, r - l + 1)

                while l <= r and curr > target:
                    curr -= nums[l]
                    l += 1
        return -1 if max_window == -1 else len(nums) - max_window

    