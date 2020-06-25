function findClosestValueInBst(tree, target) {
	let closestNode = Infinity;
	let currentNode = tree;

	while (currentNode) {
		const diff = Math.abs(target - currentNode.value);
		if (diff < Math.abs(target - closestNode)) {
			closestNode = currentNode.value;
		}
		if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else {
			currentNode = currentNode.right;
		}
	}
	return closestNode;
}
