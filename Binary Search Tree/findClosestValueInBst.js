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

// Time Complexity - O(n) - Worst Case, Average - O(log(n))
// Space Complexity - O(1)

function findClosestValueInBstRecur(tree, target, closest) {
	if (!tree) return closest;
	if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
		closest = tree.value;
	}

	if (target < tree.value) {
		return findClosestValueInBstRecur(tree.left, target, closest);
	} else if (target > tree.value) {
		return findClosestValueInBstRecur(tree.right, target, closest);
	} else {
		return closest;
	}
}

// Time Complexity - O(n) - Worst Case, Average - O(log(n))
// Space Complexity - O(n)
