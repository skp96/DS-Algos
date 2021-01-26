function nodeDepthsRecur(root, depth = 0) {
	if (root === null) return 0;

	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

// Time Complexity - O(n)
// Space Complexity - O(h)

function nodeDepthIter(root) {
	let sumDepths = 0;
	const queue = [ { node: root, depth: 0 } ];

	while (queue.length) {
		const { node, depth } = queue.shift();
		if (node === null) continue;

		sumDepths += depth;

		queue.push({ node: node.left, depth: depth + 1 });
		queue.push({ node: node.right, depth: depth + 1 });
	}
	return sumDepths;
}

// Time Complexity - O(n)
// Space Complexity - O(h)
