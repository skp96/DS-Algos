class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = this.right = null;
	}
}

function sortedArrayToBST(nums) {
	if (!nums.length) return null;

	const midIdx = Math.floor(nums.length / 2);
	const root = new TreeNode(nums[midIdx]);

	root.left = sortedArrayToBST(nums.slice(0, midIdx));
	root.right = sortedArrayToBST(nums.slice(midIdx + 1));

	return root;
}
