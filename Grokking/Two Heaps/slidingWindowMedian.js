const Heap = require('./collections/heap');

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, ((a,b) => a - b));
    this.minHeap = new Heap([], null ((a,b) => b - a));
  }

  findSlidingWindow(nums, k) {
    const result = new Array(nums.length - k + 1).fill(0.0);
    for (let i = 0; i < nums.length; i++) {
      if (this.maxHeap.length === 0 || nums[i] <= this.maxHeap.peek()) {
        this.maxHeap.push(nums[i]);
      } else {
        this.minHeap.push(nums[i]);
      }

      this.rebalanceHeap();

      if (i - k + 1 >= 0) {
        if (this.maxHeap.length === this.minHeap.length) {
          result[i - k + 1] = (this.maxHeap.peek() + this.minHeap.peek()) / 2
        } else if (this.maxHeap.length > this.minHeap.length) {
          result[i - k + 1] = this.maxHeap.peek();
        } else {
          result[i - k + 1] = this.minHeap.peek();
        }

        const elementToBeRemoved = nums[i - k + 1];
        if (elementToBeRemoved <= this.maxHeap.peek()) {
          this.maxHeap.delete(elementToBeRemoved);
        } else {
          this.minHeap.delete(elementToBeRemoved);
        }
      }
    }
  }

  rebalanceHeap() {
    if (this.maxHeap.length > this.minHeap.length) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
}

// Time Complexity: O(N * K);
// Space Complexity: O(K);