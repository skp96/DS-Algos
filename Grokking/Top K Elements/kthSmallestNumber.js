class MaxHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  buildHeap(arr){
    this.heap = arr;
    this.size = this.heap.length;
    for (var i = this.heap.length - 1; i >= 0; i--){
      this.__maxHeapify(i)
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
  };

  getMax() {
    // Time Complexity: O(1)

    if (this.size) {
      return this.heap[0]
    }
    return null;
  };

  removeMax() {
    // Time Complexity: O(logn)

    if (this.size > 1) {

      const max = this.heap[0];
      this.heap[0] = this.heap[this.size - 1];
      this.size -= 1;
      this._maxHeapify(0)
      return max
    } else if (this.size == 1) {
      
      const max = this.heap[0];
      this.size -= 1;
      return max;
    } else {

      return null;
    }
  };

  removeNode(index) {
    // Time Complexity: O(logn)

    if (!this._isValid(index)) {
      return null;
    }
    
    if (this.size > 1) {

      const node = this.heap[index];
      this.heap[index] = this.heap[this.size - 1];
      this.size -= 1;
      if (index !== 0 && this.heap[this.parent(index)] < this.heap[index]) {
        this._percolateUp(index);
      } else {
        this._maxHeapify(index)
      }
      return node;
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
    // Time Complexity: O(logn)

    const parent = Math.floor(index - 1 / 2)
    if (index <= 0) {
      return;
    } else if (this.heap[parent] < this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      this._percolateUp(parent);
    }
  };

  _maxHeapify(index) {
    // Time Complexity: O(logn)
    

    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if ((this.size > left) && (this.heap[largest] < this.heap[left])) {
      largest = left;
    }

    if ((this.size > right) && (this.heap[largest] < this.heap[right])) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      this._maxHeapify(largest);
    }
  };

}

const findKthSmallestNumber = (nums, k) => {
  const maxHeap = new MaxHeap();

  //Add k elements into heap
  for (let i = 0; i < k; i++) {
    maxHeap.insert(nums[i]);
  }

  //Iterate through remaining array, if any number is less than max, remove max and add the num
  for (let i = k; i < nums.length; i++) {
    if (nums[i] < maxHeap.getMax()) {
      maxHeap.removeMax();
      maxHeap.insert(nums[i]);
    }
  }
  return maxHeap.getMax();
}