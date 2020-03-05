class GraphNode {
	constructor(val) {
		this.val = val;
		this.neighbors = [];
	}
}

function maxValue(node, visited = new Set()) {
	const stack = [ node ];
	let max = null;

	while (stack.length) {
		let node = stack.pop();

		if (max === null || node.val > max.val) {
			max = node;
		}

		if (visited.has(node.val)) {
			continue;
		} else {
			visited.add(node.val);
		}

		stack.push(...node.neighbors);
	}

	return max.val;
}

function maxValue(node, visited = new Set()) {
	if (visited.has(node)) return -Infinity;
	visited.add(node);
	let neighborMaxes = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
	return Math.max(node.val, ...neighborMaxes);
}
