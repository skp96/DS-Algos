class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	branchSums(root, sum = 0, result = []) {
		sum += root.value;
		if (!root.left && !root.right) {
			result.push(sum);
		} else {
			if (root.left) this.branchSums(root.left, sum, result);
			if (root.right) this.branchSums(root.right, sum, result);
		}
		return result;
	}
}

// Time Complexity - O(n)
// Space Complexity - O(n)
