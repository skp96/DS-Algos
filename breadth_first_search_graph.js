class GraphNode {
	constructor(val) {
		this.val = val;
		this.neighbors = [];
	}
}

function breadthFirstSearch(startingNode, targetVal) {
	const visited = new Set();
	const queue = [ startingNode ];

	while (queue.length) {
		let node = queue.shift();

		if (node.val === targetVal) return node;
		if (visited.has(node.val)) {
			continue;
		} else {
			visited.add(node.val);
		}

		queue.push(...node.neighbors);
	}
	return null;
}
