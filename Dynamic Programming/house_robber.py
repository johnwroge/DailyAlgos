class Solution:
    # recursive top down without memo
    # def rob(self, nums: List[int]) -> int:
    #     def helper(nums, i):
    #         if i < 0:
    #             return 0       
    #         return max(helper(nums, i - 2) + nums[i], helper(nums, i - 1))
    #     return helper(nums, len(nums) - 1)

    # recursive top down with memo
    # def rob(self, nums: List[int]) -> int:
    #     memo = [-1] * len(nums)
    #     def helper(nums, i):
    #         if i < 0:
    #             return 0     
    #         if memo[i] >= 0:
    #             return memo[i]  
    #         result = max(helper(nums, i - 2) + nums[i], helper(nums, i - 1))
    #         memo[i] = result
    #         return result
    #     return helper(nums, len(nums) - 1)

    # iterative memo bottom up
    # def rob(self, nums: List[int]) -> int:
    #     if len(nums) == 0:
    #         return 0
    #     memo = [0] * (len(nums) + 1)
    #     memo[0] = 0
    #     memo[1] = nums[0]
    #     for i in range(1,len(nums)):
    #         val = nums[i]
    #         memo[i + 1] = max(memo[i], memo[i - 1] + val)
    #     return memo[len(nums)]

    # iterative plus two variables
    def rob(self, nums: List[int]) -> int:
        prev1 = 0
        prev2 = 0
        for num in nums:
            temp = max(num + prev1, prev2)
            prev1 = prev2
            prev2 = temp
        return prev2