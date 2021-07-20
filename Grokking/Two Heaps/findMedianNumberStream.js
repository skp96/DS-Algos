const Heap = require('./collections/heap');

class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap([], null, ((a,b) => a - b));
    this.minHeap = new Heap([], null, ((a,b) => b - a));
  }

  insertNum(nums) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    if(this.maxHeap.size - this.minHeap.size > 1) {
        this.minHeap.add(this.maxHeap.poll());
    } else if(this.minHeap.size - this.maxHeap.size > 1) {
        this.maxHeap.add(this.minHeap.poll());
    }
  };

  findMedian() {
    if(this.maxHeap.size > this.minHeap.size) {
        return this.maxHeap.peek();
    } else if(this.maxHeap.size < this.minHeap.size) {
        return this.minHeap.peek();
    } else {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
  }
};