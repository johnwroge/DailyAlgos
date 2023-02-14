/*
213. House Robber II
Medium
7.8K
115
Companies
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money 
stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last 
one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two
 adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money
 you can rob tonight without alerting the police.

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {

    //create a rob2 variable assign to 0 
    
    //create rob1 variable assign to 0

    //create a current 

    //iterate over the nums array


        //assign the current to be the max of either the current element plus rob1, or rob2 

        //reassign rob1 to be rob2

        //reassign rob2 to be the current

    
    //return the maximum variable
};