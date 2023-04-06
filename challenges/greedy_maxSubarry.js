/*
53. Maximum Subarray
Medium
28K
1.2K
Companies
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using 
the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//input: an array
//output: largest sum of a contiguous sub array
//kadans algorithm

var maxSubArray = function(nums) {
    
    //initialize a currentsum variable to first element
    let current = nums[0];
    //initialize a maxsum variable to first element
    let max = nums[0]; 
    
    //loop through the array
    for (let i = 1; i < nums.length; i++){
        //assign the current sum to the current sum plus the next element
        current = Math.max(nums[i], current + nums[i]);
        //reassign max sum to be the current sum or the previous max sum
        max = Math.max(current, max)
    
    }
    
    //return the maxsum
    return max;
    
};