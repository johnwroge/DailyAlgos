/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

//inputs: array of numbers
//output: largest sum from contiguous subarray
const maxSubarray = (arr) => {
  //edge case
  if (arr.length === 1) return arr[0];

  let current = 0;
  //create a max sum variable
  let max = -Infinity;
  //outer loop which runs i to the end of array
  for (let i = 0; i < arr.length; i++){
    //inner loop which runs from i + 1 to end of the array
      current += arr[i];
      max = Math.max(max, current)
    for (let j = i + 1; j < arr.length; j++){
    //calculate the current sum 
      current += + arr[j]
    //reassign the max sum to be maximum of the prev or the current sum
      max = Math.max(max, current)
    }
    //reassign current = 0;
    current = 0; 

  }
  //return the max sum variable
  return max; 
}

//console.log(maxSubarray([-100, -20, -5, -10]))

/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {

  //if arr.length is 1, return first element
  if (arr.length === 1) return arr[0];
  //store the current max to be the first element in the array
  let max = arr[0];
  //store the current to be the first element in the array
  let current = arr[0];
  //iterate over the values in the array
  for (let i = 1; i < arr.length; i++){
    //temp sum variable assigned to 
     current = Math.max(arr[i], current + arr[i])
    //assign the max to maximum of the temp sum or prev max
     max = Math.max(max, current)
  }
//return max

  return max; 
}

module.exports = { maxSubarray, kadanesMaxSubarray };


//