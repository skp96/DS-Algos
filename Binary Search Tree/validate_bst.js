class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function validateBST(tree, minVal = -Infinity, maxVal = Infinity) {
	if (!tree) return true;
	if (tree.value < minVal || tree.value >= maxVal) return false;
	const leftIsValid = validateBST(tree.left, minVal, tree.value);
	const rightIsValid = validateBST(tree.right, tree.value, maxVal);

	return leftIsValid && rightIsValid;
}

// Time Complexity - O(n)
// Space Complexity - O(d), where d is the depth of the BST
