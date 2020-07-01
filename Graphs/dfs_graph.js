class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	depthFirstSearchIter(array) {
		const stack = [ this ];

		while (stack.length) {
			const node = stack.shift();

			array.push(node.name);
			if (node.children.length > 0) {
				stack.unshift(...node.children);
			}
		}
		return array;
	}

	depthFirstSearchRecur(array) {
		array.push(this.name);

		this.children.forEach((node) => node.depthFirstSearchRecur(array));

		return array;
	}
}

// Time Complexity: O(v + e)
// Space Complexity: O(v)
