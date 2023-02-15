/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/



    const mergeRanges = intervals => {
        //edge case: if only one array, return the original intervals
        if (intervals.length < 2) return intervals;
        
        //sort the array of arrays by first index
        intervals.sort((a, b) => a[0] - b[0]);
        
        //initialize results array
        const result = [];
        //initialize previous array to be the first array in intervals
        let previous = intervals[0];
        //iterate through intervals starting at 2nd element
        for (let i = 1; i < intervals.length; i += 1) {
            //check if 2nd element in previous array is greater than or equal to 
            //the 1st element in the current array
          if (previous[1] >= intervals[i][0]) {
            //reassign the previous to be an array at the previous 0th index and the max of
            //either the current or previous 2nd element
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];
          } else {
            //otherwise just push the previous into the result array
            result.push(previous);
            //reassign the previous to be the current index for the next iteration
            previous = intervals[i];
          }
        }
        //push the  previous element into the result array
        result.push(previous);
        //finally, return the result
        return result;
      };

const mergeIntervalReduce = (intervals) => {

  //create an array to store output
  const mergedIntervals = [];
  //sort the intervals array by the first index
  intervals.sort((a,b) => a[0] - b[0])
  //push the evaluated result of invoking the reduce function on the array
    mergedIntervals.push(
        intervals.reduce((acc,curr) => {
          if (curr[0] > acc[1]){
            mergedIntervals.push(acc);
            return curr
          }
          if (curr[1] > acc[1]){
            acc[1] = curr[1];
          }
          return acc;
        })
    )
return mergedIntervals; 
}


//mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])
console.log(mergeRanges([[8, 10], [15, 18], [1, 3], [2, 6]]))
module.exports = {mergeRanges};
