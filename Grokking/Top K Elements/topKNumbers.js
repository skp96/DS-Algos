class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  buildHeap(arr){
    this.heap = arr;
    this.size = this.heap.length;
    for (var i = this.heap.length - 1; i >= 0; i--){
      this.minHeapify(i)
    }
  }

  insert(val) {
    // Time Complexity: O(logn)

    //We do not resize the heap array when deleting elements, because the time complexity of resizing using splice or slice, would be O(n), insteal we reduce the size property
    if (this.size >= this.heap.length) {
      this.size += 1;
      this.heap.push(val);
      this._percolateUp(this.heap.length - 1);
    } else {
      this.heap[this.size] = val;
      this.size += 1;
      this._percolateUp(this.size - 1);
    }
  }

  getMin() {
    // Time Complexity: O(1)

    if (this.size) {
      return this.heap[0];
    }
    return null;
  }

  removeMin() {
    // Time Complexity: O(logn)

    if (this.size > 1) {
      const min = this.heap[0];
      this.heap[0] = this.heap[this.size - 1];
      this.size -= 1;
      this._minHeapify(0);
      return min;
    } else if (this.size === 1) {
      const min = this.heap[0];
      this.size -= 1;
      return min
    } else {
      return null;
    }
  }

  removeNode(index) {
    // Time Complexity: O(logn)

    if(!this._isValid(index)) {
      return null;
    }

    if (this.size > 1) {
      const node = this.heap[index];
      this.heap[index] = this.heap[this.size - 1]
      this.size -= 1;

      if (index !== 0 && this.heap[this._parent(index)] > this.heap[index]) {
        this._percolateUp(index);
      } else {
        this.minHeapify(index);
      }
    } else {
      null;
    }
  }

  //Private functions

  _isValid(index) {
    return index >= 0 && index < this.size;
  }

  _parent(index) {
    return (index - 1) / 2;
  };

  _getLeftChild(index) {
    return 2 * index + 1;
  };

  _getRightChild(index) {
    return 2 * index + 2;
  };

  _percolateUp(index) {
    // Time Complexity: O(logN)

    const parent = Math.floor((index - 1) / 2);
    if (index <= 0) {
      return;
    } else if (this.heap[parent] > this.heap[index]){
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      this._percolateUp(parent)
    }
  }

  _minHeapify(index) {
    // Time Complexity: O(logN)
    
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if ((this.size > left) && (this.heap[smallest] > this.heap[left])) {
      smallest = left;
    }

    if ((this.size > right) && (this.heap[smallest] > this.heap[right])) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
      this._minHeapify(smallest);
    }
  }
}

const findKLargest = (nums, k) => {
  const minHeap = new MinHeap();

  for (let i = 0; i < k; i++) {
    minHeap.insert(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.getMin()) {
      minHeap.removeMin();
      minHeap.insert(nums[i]);
    }
  }

  return minHeap.heap;
}

// Time Complexity: O(N * logK);
// Space Complexity: O(K);