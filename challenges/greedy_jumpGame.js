/*
55. Jump Game
Medium
15.3K
784
Companies
You are given an integer array nums. You are initially positioned at the array's first index, 
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is
 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//I/O 
//[2,3,1,1,4]
// 0 -> 

//[3,2,1,0,4]

//input: an array of numbers
//output: boolean, if we can get to end of the array

//question: what if first index in array is a 0

 var canJump = function(nums, index = 0, cache = {}) {

    console.log(index)

    let maxJump = nums[index];

    //base case: if current index is nums.length - 1
    if (index >= nums.length - 1) return true;
        //return true
    
    //base case: if the maxJump already exists
        //return false
    if (cache[index] || nums[index] === 0) return false; 

    //recursive case: 
    while (maxJump > 0){
        cache[index] = true; 
        return canJump(nums, index + maxJump, cache);
        maxJump--; 
    }
};

console.log(canJump([2,5,0,0]))