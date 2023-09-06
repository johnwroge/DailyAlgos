
from typing import List


def maxSubArray( nums: List[int]) -> int:
    total = nums[0]
    maxSum = float('-inf')
    for i in range(1, len(nums)):
        total = max(total + nums[i], nums[i])
        maxSum = max(maxSum, total)
    return maxSum


# print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))



def canJump(nums: List[int]) -> bool:
    end = len(nums) - 1
    for i in range(end - 1, -1, -1):
        if i + nums[i] >= end:
            end = i
    return end == 0
   

# print(canJump([2,3,1,1,4]))
        
        