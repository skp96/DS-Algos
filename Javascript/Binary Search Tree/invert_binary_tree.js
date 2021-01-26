function invertBinaryTreeIter(tree) {
	const queue = [ tree ];

	while (queue.length) {
		const parentNode = queue.shift();
		if (!parentNode) continue;

		const temp = parentNode.left;
		parentNode.left = parentNode.right;
		parentNode.right = temp;

		queue.push(parentNode.left);
		queue.push(parentNode.right);
	}
	return tree;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

function invertBinaryTreeRecur(tree) {
	if (!tree) return;

	const temp = tree.left;
	tree.left = tree.right;
	tree.right = temp;

	invertBinaryTreeRecur(tree.left);
	invertBinaryTreeRecur(tree.right);

	return tree;
}

// Time Complexity: O(n)
// Space Complexity: O(d) where d is the depth of the binary tree
