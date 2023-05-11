class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp()
    }
    bubbleUp(){
        let index = this.values.length - 1; 
        let element = this.values[index];

        while (index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break; 
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
            index = parentIndex;
        }

    }

}

let heap = new MaxBinaryHeap()

heap.insert(10)
heap.insert(15)
heap.insert(5)
heap.insert(1)
heap.insert(100)
heap.insert(20)
heap.insert(6)
console.log(heap)