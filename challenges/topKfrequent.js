/*
347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements.
 You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// input a nums array, k an integer
// output: an array
//  var topKFrequent = function(nums, k) {

//     //create a counter object
//     const obj = {};
//     //create a result array
//     const result = [];
//     //iterate over the nums array
//     for (num of nums){
//         //check if the current nums exists in the object
//         obj[num] ? obj[num] += 1 : obj[num] = 1;
//             //if yes, increment the number, otherwise create and assign to 1
//     }
//     console.log(obj)
//     //iterate over the counter object.keys from 0 to k
  
//     //return the result array
        
    
    
// };


var topKFrequent = function(nums, k) {
    //create a new map 
    const freqMap = new Map();
    //create a bucket to store frequencies (index) of elements
    const bucket = [];
    //create a result array
    const result = [];
    
    /*
Map contain number as key and frequency as value. This code loops through map and insert 
keys and values inside bucket. bucket[frequency] = (if there is bucket[frequency] set then
    add (number)) or new Set().add(number).
    */
    for(let num of nums) {
        console.log(freqMap.get(num))
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
   
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};
console.log(topKFrequent([1,1,1,2,2,3], 2))