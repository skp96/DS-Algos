class MaxHeap {
  constructor(size = 0) {
    this.values = new Array(size);
    this.size = size;
  };

  parent(idx) {
    return (idx - 1) / 2;
  };

  getLeftChild(idx) {
    return 2 * idx + 1;
  };

  getRightChild(idx) {
    return 2 * idx + 2;
  };

  isValidPosition(idx) {
    return (idx >= 0 && i < this.size);
  }

  getMax() {
    if (size === 0) return null;

    return this.values[0];
  }

  insert(value) {
    if (this.size >= this.values.length) {
      throw "Heap Full Expection";
    }

    const valueIdx = this.size;
    this.values[size] = value;
    this.size += 1;// 

    this.propagateUp(valueIdx);
  }

  removeMax() {
    if (size === 0) throw "Heap Empty Expection";

    this.values[0] = this.values[size - 1];

    this.heapify(0);
  }

  removeNode(idx) {
    if (!this.isValidPosition(idx)) throw "Illegal Argument Exepection";
  }
}