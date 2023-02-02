/*
295. Find Median from Data Stream
The median is the middle value in an ordered integer list. If the size of 
the list is even, there is no middle value, and the median is the mean of 
the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of 
the actual answer will be accepted.
*/

var MedianFinder = function() {
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


/** 
 * https://leetcode.com/problems/find-median-from-data-stream/
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


// Neetcode
 class MedianFinder {
    constructor () {
        this.maxHeap = new MaxPriorityQueue()
        this.minHeap = new MinPriorityQueue()
    }

    /* Time O(log(N)) | Space (N) */
    insertNum (num) {
        this.addNum(num)
    }

    addNum (num, heap = this.getHeap(num)) {
        heap.enqueue(num)
        this.rebalance()
    }

    getHeap (num, { maxHeap, minHeap } = this) {
        const isFirst = maxHeap.isEmpty()
        const isGreater = num <= this.top(maxHeap);
        const isMaxHeap = (isFirst || isGreater);
        return (isMaxHeap)
            ? maxHeap
            : minHeap
    }

    

    top (heap) {
        return heap.front()?.element || 0
    }
}























