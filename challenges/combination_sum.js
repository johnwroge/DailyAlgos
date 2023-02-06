/*
39. Combination Sum
Medium
14.9K
300
Companies
Given an array of distinct integers candidates and a target integer target, return a list 
of all unique combinations of candidates where the chosen numbers sum to target. You may return 
the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are
 unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is
 less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//leetcode soln 1
 var combinationSum = function(candidates, target) {
    let res = []
    let temp = []
    let iterate = (index,sum)=>{
        if(sum>target) return;
        if(sum == target){
            res.push([...temp])
            return;
        }
        for(let i =index; i<candidates.length;i++){
            if(candidates[i]>target)continue
            temp.push(candidates[i])
            iterate(i, sum+candidates[i])
            temp.pop()
        }
    }
    iterate(0,0)
    return res;
};

//neetcode v2

var combinationSum = function (candidates, target, index = 0, combination = [], combinations = []) {
    const isBaseCase = target < 0;
    if (isBaseCase) return combinations;

    const isTarget = target === 0;
    if (isTarget) return combinations.push(combination.slice());

    for (let i = index; i < candidates.length; i++) {
        backTrack(candidates, target, i, combination, combinations);
    }

    return combinations;
}

const backTrack = (candidates, target, i, combination, combinations) => {
    combination.push(candidates[i]);
        combinationSum(candidates, (target - candidates[i]), i, combination, combinations);
    combination.pop();
}





















