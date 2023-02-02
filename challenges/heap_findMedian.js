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

    rebalance ({ maxHeap, minHeap } = this) {
        const canShiftMax = (minHeap.size() + 1) < maxHeap.size()
        if (canShiftMax) return minHeap.enqueue(maxHeap.dequeue().element)

        const canShiftMin = maxHeap.size() < minHeap.size()
        if (canShiftMin) return maxHeap.enqueue(minHeap.dequeue().element)
    }

    /* Time O(1) | Space (1) */
    findMedian ({ maxHeap, minHeap } = this) {
        const isEven = maxHeap.size() === minHeap.size()
        return (isEven)
            ? this.average(maxHeap, minHeap)
            : this.top(maxHeap)
    }

    average (maxHeap, minHeap) {
        return (this.top(maxHeap) + this.top(minHeap)) / 2
    }

    top (heap) {
        return heap.front()?.element || 0
    }
}























