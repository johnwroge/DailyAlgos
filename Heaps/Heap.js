

class MaxBinaryHeap {
    constructor (){
        this.values = [41, 39, 33, 18, 37, 12]; 
    };

    insert (element){
        this.values.push(element);
        this.bubbleUp(); 
    }

    bubbleUp (){
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent; 
            index = parentIndex;
                }
        }
    sinkDown (){
        let index = 0;
        const length = this.values.length; 
        const element = this.values[0];
        while (true){
            let left = 2*index + 1;
            let right = 2*index + 2;
            let leftChild, rightChild; 
            let swap = null;
            if (left < length){
                leftChild = this.values[left];
                if (leftChild > element){
                    swap = left;
                }
            }
            if (right < length){
                rightChild = this.values[right];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                    )
                {
                    swap = right;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element; 
            index = swap;
        }

        
        
    }
    extractMax (){
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0){
            this.values[0] = end; 
            this.sinkDown(); 
        }
        return max;
    
    }
    } 

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(199)