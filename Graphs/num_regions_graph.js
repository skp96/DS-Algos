function numRegions(graph) {
	const visted = new Set();
	let count = 0;
	for (let node in graph) {
		if (depthFirst(node, graph, visted)) count++;
	}
}

function depthFirst(node, graph, visted) {
	if (visted.has(node)) return false;

	graph[node].forEach((neighbor) => depthFirst(neighbor, graph, visted));
	return true;
}
