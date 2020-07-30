// Recursive
function minHeightBST(array, node = null) {
	if (!array.length) return;
	const midIdx = Math.floor(array.length / 2);
	const midValue = array[midIdx];

	if (!node) {
		node = new BST(midValue);
	} else {
		node.insert(midValue);
	}

	const leftArray = array.slice(0, midIdx);
	const rightArray = array.slice(midIdx + 1);

	minHeightBST(leftArray, node);
	minHeightBST(rightArray, node);

	return node;
}

// Time Complexity: O(nlog(n))
// Space Complexity: O(n)

// Recursive
function minHeightBST(array, bst = null, startIdx = 0, endIdx = array.length - 1) {
	if (endIdx < startIdx) return;
	const midIdx = Math.floor((startIdx + endIdx) / 2);
	const newBSTNode = new BST(array[midIdx]);

	if (!bst) {
		bst = newBSTNode;
	} else {
		if (array[midIdx] < bst.value) {
			bst.left = newBSTNode;
			bst = bst.left;
		} else {
			bst.right = newBSTNode;
			bst = bst.right;
		}
	}

	minHeightBST(array, bst, startIdx, midIdx - 1);
	minHeightBST(array, bst, midIdx + 1, endIdx);
	return bst;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Recursive
function minHeightBST(array, starIdx = 0, endIdx = array.length - 1) {
	if (endIdx < starIdx) return null;
	const midIdx = Math.floor((startIdx + endIdx) / 2);
	const bst = new BST(array[midIdx]);
	bst.left = minHeightBST(array, starIdx, midIdx - 1);
	bst.right = minHeightBST(array, midIdx + 1, endIdx);
	return bst;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (!this.left) {
				this.left = new BST(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if (!this.right) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
	}
}
