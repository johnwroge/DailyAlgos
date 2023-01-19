/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

//input: array of number
//output: array of numbers

const getAllProducts = nums => {
//create a new left array with size of input array 
    const left = new Array(nums.length).fill(0);
    left[0] = 1;
    //create a new right array with size of input array
    const right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;
    //iterate over the left array starting at the 2nd (1st index) element
    for (let i = 1; i < nums.length; i++){
        //reassign the current element to the product of the previous element 
        left[i] = nums[i - 1] * left[i - 1];
    }
    //iterate over the right array starting with the 2nd (length - 2) last element
    for (let i = right.length - 2; i >= 0; i--){
        right[i] = nums[i + 1] * right [i + 1];  
    }
    //iterate over both left and right arrays 
    for (let i = 0; i < nums.length; i++){
        //reassign the current nums element to the product of the left and right at the same index
        nums[i] = left[i] * right[i];
    }
    //return the updated nums array
    return nums; 
};

module.exports = {getAllProducts};
