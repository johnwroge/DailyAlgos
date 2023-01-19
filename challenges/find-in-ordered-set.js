/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {

  if (!array.length) return false;

  //initialize a left, right and middle index
  let left = 0; 
  let right = array.length - 1;
  let middle;
  //loop while left is less than or equal to right
  while (left <= right){
    //calculate the middle index
    middle = Math.floor((left + right) / 2);
    //test if the target is the middle value
    if (array[middle] === target ) return true;
      //return true;
    //otherwise check if target is less than middle
    else if (target < array[middle]){
      //if true reassign right to be middle - 1
      right = middle - 1;
    } else {
    //otherwise, 
      //reassign left to middle + 1
      left = middle + 1;
    }
  }

  //otherwise return false
return false; 
};


/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (array, target) => {

  array = array.flat(Infinity);

  if (!array.length) return false;

  //initialize a left, right and middle index
  let left = 0; 
  let right = array.length - 1;
  let middle;
  //loop while left is less than or equal to right
  while (left <= right){
    //calculate the middle index
    middle = Math.floor((left + right) / 2);
    //test if the target is the middle value
    if (array[middle] === target ) return true;
      //return true;
    //otherwise check if target is less than middle
    else if (target < array[middle]){
      //if true reassign right to be middle - 1
      right = middle - 1;
    } else {
    //otherwise, 
      //reassign left to middle + 1
      left = middle + 1;
    }
  }

  //otherwise return false
return false; 

};

//////////////////////////////////////////////////////////////////////////////
// Two level Binary search
// Time: O(log(m) + log(n))  Space: O(1)
//////////////////////////////////////////////////////////////////////////////
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let [top, bot] = [0, rows-1];
  
  while(top <= bot){
      let row = Math.floor((top +  bot) / 2);
      if(target > matrix[row][cols-1]) {
          top = row + 1;
      } else if(target < matrix[row][0]) {
          bot = row - 1; 
      } else {
          break;
      }
  }
  
  if(!(top <= bot)) {
      return false;
  }
  
  let row = Math.floor((top + bot) / 2);
  let [l, r] = [0, cols-1];
  while(l<=r){
      let m = Math.floor((l + r) /2);
      if(target > matrix[row][m]) {
          l = m +1;
      } else if(target < matrix[row][m]) {
          r = m - 1;
      } else if(target == matrix[row][m]) {
          return true;
      }
  }
  return false;
};

//////////////////////////////////////////////////////////////////////////////
// Single Binary Search
// Time: O(log(mn))  Space: O(1)
//////////////////////////////////////////////////////////////////////////////

/**
* @param {number[][]} matrix
* @param {number} target
* Time O(log(ROWS * COLS)) | Space O(1)
* @return {boolean}
*/
var searchMatrix = function (matrix, target) {
  const [rows, cols] = [matrix.length, matrix[0].length];
  let [left, right] = [0, rows * cols - 1];

  while (left <= right) {
      const mid = (left + right) >> 1;
      const [row, col] = [Math.floor(mid / cols), mid % cols];
      const guess = matrix[row][col];

      const isTarget = guess === target;
      if (isTarget) return true;

      const isTargetGreater = guess < target;
      if (isTargetGreater) left = mid + 1;

      const isTargetLess = target < guess;
      if (isTargetLess) right = mid - 1;
  }

  return false;
};




module.exports = { findInOrderedSet, findIn2dMatrix };
