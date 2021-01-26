const inOrderArray = (root) => {
	if (!root) return [];

	return [ ...inOrderArray(root.left), root.value, ...inOrderArray(root.right) ];
};

const postOrderArray = (root) => {
	if (!root) return [];

	return [ ...postOrderArray(root.left), ...postOrderArray(root.right), root.value ];
};
