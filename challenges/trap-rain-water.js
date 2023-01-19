
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

*/

var trap = function(height) {
    let [l, r, lmax, rmax, max] = [0, height.length-1, 0, 0, 0];
    while(l < r) {
        if(height[l] <= height[r]) {
            if(height[l] >= lmax) {
                lmax = height[l];
            } else {
                max += lmax-height[l];
            }
            l++;
        } else {
            if(height[r] >= rmax) {
                rmax = height[r];
            } else {
                max += rmax-height[r];
            }
            r--;
        }
        
    }
    return max;
};


var trap = function(height) {
    
    const maxLeft = [];
    const maxRight = [];
    const minLeftRight = [];

    let current = 0;
    for(let i = 0; i < height.length; i++) {
     maxLeft.push(current);
     current  = Math.max(current, height[i]);
    }
    current = 0;
    for(let i = height.length - 1; i > -1; i--) {
        maxRight.push(current);
        current = Math.max(current, height[i]);
    }
    // because the elements were added reverse. 
    maxRight.reverse();

    for(let i = 0; i < height.length; i++) {
        const minofLeftRight = Math.min(maxLeft[i],maxRight[i]);
        minLeftRight.push(minofLeftRight);
    }

    let water = 0;
    for(let i = 0; i < height.length; i++) {
        if(minLeftRight[i] - height[i] > 0) {
            water += minLeftRight[i] - height[i];
        }
    }

    return water;
};


/**
 * https://leetcode.com/problems/trapping-rain-water/
 * Time O(N) | Space O(1)
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let [left, right] = [0, height.length - 1];
    let [maxLeft, maxRight, area] = [0, 0, 0];

    while (left < right) {
        const [leftHeight, rightHeight] = getHeights(height, left, right);
        const [leftWindow, rightWindow] = getWindows(
            height,
            left,
            maxLeft,
            right,
            maxRight
        );

        const isRightGreater = leftHeight <= rightHeight;
        if (isRightGreater) {
            if (hasNewMax(maxLeft, leftHeight)) maxLeft = leftHeight;
            else area += leftWindow;

            left++;
        }

        const isRightLess = rightHeight < leftHeight;
        if (isRightLess) {
            if (hasNewMax(maxRight, rightHeight)) maxRight = rightHeight;
            else area += rightWindow;

            right--;
        }
    }

    return area;
};

const hasNewMax = (max, height) => max < height;

const getHeights = (height, left, right) => [height[left], height[right]];

const getWindows = (height, left, maxLeft, right, maxRight) => {
    const [leftHeight, rightHeight] = getHeights(height, left, right);
    const [leftWindow, rightWindow] = [
        maxLeft - leftHeight,
        maxRight - rightHeight,
    ];

    return [leftWindow, rightWindow];
};