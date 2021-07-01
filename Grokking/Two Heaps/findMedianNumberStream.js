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

    if (this.maxHeap.length > this.minHeap.length) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findMedian() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    } 
    const result = this.maxHeap.length > this.minHeap.length ? this.maxHeap.peek() : this.minHeap.peek();
    return result;
  }
}