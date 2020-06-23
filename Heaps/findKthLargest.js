class MaxHeap {
	constructor() {
		this.array = [ null ];
	}

	getParent(idx) {
		return Math.floor(idx / 2);
	}

	getLeftChild(idx) {
		return idx * 2;
	}

	getRightChild(idx) {
		return idx * 2 + 1;
	}

	siftUp(idx) {
		if (idx === 1) return;

		const parentIdx = this.getParent(idx);

		if (this.array[parentIdx] < this.array[idx]) {
			[ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];

			this.siftUp(parentIdx);
		}
	}

	insert(val) {
		this.array.push(val);

		this.siftUp(this.array.length - 1);
	}

	siftDown(idx) {
		const leftIdx = this.getLeftChild(idx);
		const rightIdx = this.getRightChild(idx);
		let leftVal = this.array[leftIdx];
		let rightVal = this.array[rightIdx];

		if (leftVal === undefined) leftVal = -Infinity;
		if (rightVal === undefined) rightVal = -Infinity;

		if (this.array[idx] > leftVal && this.array[idx] > rightVal) return;

		let swapIdx;
		if (leftVal > rightVal) {
			swapIdx = leftIdx;
		} else {
			swapIdx = rightIdx;
		}
		[ this.array[idx], this.array[swapIdx] ] = [ this.array[swapIdx], this.array[idx] ];

		this.siftDown(swapIdx);
	}

	deleteMax() {
		if (this.array.length === 2) return this.array.pop();
		if (this.array.length === 1) return null;

		const max = this.array[1];

		this.array[1] = this.array.pop();

		this.siftDown(1);

		return max;
	}
}

const findKthLargest = (nums, k) => {
	const heap = new MaxHeap();

	nums.forEach((num) => heap.insert(num));
	for (let i = 1; i < k; i++) heap.deleteMax();
	return heap.deleteMax();
};

// const findKthLargest = (nums, k) => {
// 	nums.sort((a, b) => a - b);

// 	return nums[nums.length - k];
// };
