'''
1235. Maximum Profit in Job Scheduling
Hard
6.3K
85
Companies
We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i],
 obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can 
take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts 
at time X.

 

Example 1:



Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
Example 2:



Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job. 
Profit obtained 150 = 20 + 70 + 60.
Example 3:



Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6
 

Constraints:

1 <= startTime.length == endTime.length == profit.length <= 5 * 104
1 <= startTime[i] < endTime[i] <= 109
1 <= profit[i] <= 104
'''


# def jobScheduling(startTime, endTime, profit):
#     DP = [0] * len(startTime)
#     DP[len(DP) - 1] = profit[len(profit) - 1]
#     new_array = [(start, end, pro) for start, end, pro in zip(startTime, endTime, profit)]
#     new_array.sort(key=lambda x: x[1])
#     print(new_array)
#     for i in range(len(DP) - 1, -1, -1):
#         for j in range(i + 1, len(DP)):
#             if new_array[i][1] <= new_array[j][0]:
#                 DP[i] = new_array[i][2] + DP[j]
#             elif new_array[j][0] < new_array[i][0]:
#                 DP[i] = max(new_array[i][3) 
#             else:
#                 DP[i] = max(DP[i], new_array[j][2])
#     print(DP)
#     return max(DP)

class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        intervals = sorted(zip(startTime, endTime, profit))
        cache = {}
        def dfs(i):
            if i in cache:
                return cache[i]
            if i >= len(intervals):
                return 0

            res = dfs(i + 1)

            j = bisect.bisect(intervals, (intervals[i][1], -1, -1))
            cache[i] = res = max(res, intervals[i][2] + dfs(j))
            

            return res

        return dfs(0)

        




startTime1 = [1,2,3,4,6]
endTime1 = [3,5,10,6,9]
profit1 = [20,20,100,70,60]
print(jobScheduling(startTime1,endTime1,profit1))