'''
4. Median of Two Sorted Arrays
Hard
26K
2.9K
Companies
Given two sorted arrays nums1 and nums2 of size m and n 
respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
'''



import heapq
from typing import List


def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:
    nums = nums1 + nums2
    largeMin = []
    smallMax = []
    heapq.heapify(largeMin)
    heapq.heapify(smallMax)  
    for num in nums:
        
        if largeMin and num > largeMin[0]:
            heapq.heappush(largeMin, num)
        else:
            heapq.heappush(smallMax, -1 * num)

        if len(largeMin) > len(smallMax) + 1:
            val = heapq.heappop(largeMin)
            heapq.heappush(smallMax, -1 * val)

        if len(largeMin) + 1 < len(smallMax):
            val = heapq.heappop(smallMax)
            heapq.heappush(largeMin, -1 * val)
            
    if len(largeMin) > len(smallMax):
        return largeMin[0]
    elif len(largeMin) < len(smallMax):
        return -1* smallMax[0]
    else:
        return (largeMin[0] + (-1 * smallMax[0]))/2

print(findMedianSortedArrays([1,2], [3,4]))