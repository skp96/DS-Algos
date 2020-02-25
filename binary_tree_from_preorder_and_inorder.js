class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const buildTree = (preOrder, inOrder) => {
	if (preOrder.length === 0 && inOrder.length === 0) return null;

	const rootVal = preOrder[0];
	const root = new TreeNode(rootVal);

	const midIdx = inOrder.indexOf(rootVal);
	const leftInOrder = inOrder.slice(0, midIdx);
	const rightInOrder = inOrder.slice(midIdx + 1);

	const leftPreOrder = preOrder.filter((val) => leftInOrder.includes(val));
	const rightPreOrder = preOrder.filter((val) => rightInOrder.includes(val));

	const leftTree = buildTree(leftPreOrder, leftInOrder);
	const rightTree = buildTree(rightPreOrder, rightInOrder);

	root.left = leftTree;
	root.right = rightTree;

	return root;
};
