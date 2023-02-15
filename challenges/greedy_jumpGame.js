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

//DP: Top Down left to right S:O(n) TO(n2)
 var canJump = function(nums, index = 0, cache = {}) {

    //create a memo array to store position's capability

    //create a helper function that takes one index to iterate over the nums array

        //base case: check if idx value is good -> return true
        //base case: check if idx value is bad - return false
        //calculate max jump

        //iterate over the array starting at idx + 1
            //invoke helper function for each index and store in variable

            //check if variable is true
                //change the index to "good"
                //return true
            //outside of loop, change idx to 'false'    
            //return false;

    //return the helper function with first index 
    
};

//DP: Bottom Up (right to left) same space and time, but a little faster 

//greedy OPTIMAL SOLUTION:

function jumpGame (nums){

    //create a variable to store max jump or goal
    let goal = nums.length - 1; 
    //iterate over the nums array starting at 2nd last element
    for (let i = nums.length - 2; i >= 0; i--){
        //check if the 2nd last element plus i is greater than or eqaul to maxJump/goal
        if (nums[i] + i >= goal){
        //if true -> reassign maxjump to be the current i value
            goal = i;
        }
    }
//return conditional checking if nums[0] is 0 
return goal === 0; 
}







var canJumpGreedy = function(nums) {

    //store last index in variable maxJump
    let maxJump = nums.length - 1; 
    //iterate starting at 2nd last element
    for (let i = nums.length - 2; i >= 0; i--){
        //check if i + nums[i] >= maxJump
        if (i + nums[i] >= maxJump){
        //if true, reassing maxjump to be i
        maxJump = i;
        }
    }
 //return conditional checking if maxjump is 0
 return maxJump === 0; 
}
console.log(canJump([2,5,0,0]))

/**
 * Time O(2^N) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = (nums, index = 0) => {
    const isBaseCase = index === nums.length - 1;
    if (isBaseCase) return true;

    const furthestJump = Math.min(index + nums[index], (nums.length - 1));
    for (let nextIndex = (index + 1); nextIndex <= furthestJump; nextIndex++) {
        if (canJump(nums, nextIndex)) return true;
    }

    return false;
}

/**
 * Time O(N^2) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = (nums) => {
    const memo = new Array(nums.length).fill(0);
    memo[memo.length - 1] = 1;
    
    return canJumpFromIndex(nums, memo);
}

const canJumpFromIndex = (nums, memo, index = 0) => {
    if (memo[index] !== 0) return memo[index] === 1;

    const furthestJump = Math.min(index + nums[index], nums.length - 1);
    for (let nextIndex = (index + 1); nextIndex <= furthestJump; nextIndex++) {
        if (!canJumpFromIndex(nums, memo, nextIndex)) continue

        memo[index] = 1;
        return true;
    }

    memo[index] = -1;
    return false;
}

/**
 * Time O(N^2) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = (nums) => {
    const memo = new Array(nums.length).fill(0)
    memo[memo.length - 1] = 1;

    for (let i = (nums.length - 2); 0 <= i; i--) {
        const furthestJump = Math.min(i + nums[i], nums.length - 1);
        for (let j = (i + 1); j <= furthestJump; j++) {
            const isGood = memo[j] === 1
            if (isGood) { memo[i] = 1; break; }
        }
    }

    return memo[0] === 1;
}

/**
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = (nums, max = 0, index = 0) => {
    while (index < nums.length) {
        const num = nums[index]
        const jumps = num + index
        
        const canNotReachEnd = max < index
        if (canNotReachEnd) return false
        
        max = Math.max(max, jumps)
        index++
    }

    return true
}

/**
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = (nums, right = nums.length - 1) => {
    for (let i = right; 0 <= i; i--) {
        const isJumpable = right <= (i + nums[i])
        if (isJumpable) right = i;
    }

    return right === 0;
}


const canJump = (nums) => {

   //create a goal parameter corresponding to the length of the array

   //iterate starting at 2nd last index, decrementing by 1, while i>= 0
    //check if the current index + the current element is greater than or equal to the goal
        //if true, reassign goal to be this index

    //return a conditional checking if goal is 0


}