/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

const mergeSort = array => {

  //check if the array length is less than or equal to 1
  if (array.length <= 1) return array; 
  //create a midpoint
  let mid = Math.floor(array.length/2);
  //create a left half 
  let left = mergeSort(array.slice(0, mid));
  //create a right half
  let right = mergeSort(array.slice(mid));
  //call merge on the left and right half
  return merge(left, right);
}

const merge = (arr1, arr2) => {

let i = 0; 
let j = 0; 
const result = [];

while (i < arr1.length && j < arr2.length){
  if (arr1[i] < arr2[j]){
    result.push(arr1[i]);
    i++
  } else {
    result.push(arr2[j]);
    j++
  }
}

while (i < arr1.length){
  result.push(arr1[i]);
  i++;
}

while (j < arr2.length){
  result.push(arr2[j]);
  j++
}
return result; 
}


console.log(mergeSort([3,6,8,3,77,33,22,11,77,0]))

module.exports = { mergeSort };