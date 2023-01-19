/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...arrays) => {
    //create an accumulator value that acts as a test case for our function
	let acc = arrays.pop();
    //iterate over the array of arrays while it still contains elements
            while (arrays.length){
    //assign a new current array to the next array in the passed in arrays
          let current = arrays.pop();
    //create an output array to store elements
          let output = [];
    //check if each element in the array is included in the accumulator array
            //if yes, push into output array
          current.forEach(el => {
           if (acc.includes(el)) output.push(el);
          })
    //now reassign the accumulator to the output array 
          acc = output; 
        }
    
      return acc.length ? acc : 'Nothing in Common!'  

}
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

console.log(commonElements(arr1, arr2, arr3)) //> [2, 3, 2000, 'dog']


/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
    let results = new Set();
    let current = args.pop();
    for (let num of current){
        results.add(num);
    }
    let acc;

    while (args.length){
        acc = args.pop();
        


    }





}

module.exports = {commonElements, commonElementsOptimized} 