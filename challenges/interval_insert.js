/*
57. Insert Interval
Medium
7.9K
542
Companies
You are given an array of non-overlapping intervals intervals where 
intervals[i] = [starti, endi] represent the start and the end of the
 ith interval and intervals is sorted in ascending order by starti. 
 You are also given an interval newInterval = [start, end] that represents 
 the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in 
ascending order by starti and intervals still does not have any overlapping
intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    //add the new interval into the intervals
    intervals.push(newInterval);
    //sort the intervals by the first index
    intervals.sort((a,b) => a[0] - b[0]);
    //invoke the helper function and return the result
    return merge(intervals);
};

var merge = (intervals, result = []) => {

    let prev = intervals.shift();

    for (const curr of intervals) {
        const [prevStart, prevEnd] = prev;
        const [currStart, currEnd] = curr;

        const hasOverlap = currStart <= prevEnd;
        if (hasOverlap) {
            prev[1] = Math.max(prev[1], curr[1]);
            continue;
        }

        merged.push(prev);
        prev = curr;
    }

    return [...merged, prev];
}