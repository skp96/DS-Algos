const merge = (left, right) => {
	const merged = [];

	while (left.length || right.length) {
		let ele1 = left.length ? left[0] : Infinity;
		let ele2 = right.length ? right[0] : Infinity;

		let next;
		if (ele1 < ele2) {
			next = left.shift();
		} else {
			next = right.shift();
		}
		merged.push(next);
	}
	return merged;
};

const mergeSort = (nums) => {
	if (nums.length <= 1) return nums;

	const midPoint = Math.floor(nums.length / 2);
	const sortedLeft = mergeSort(nums.slice(0, midPoint));
	const sortedRight = mergeSort(nums.slice(midPoint));

	return merge(sortedLeft, sortedRight);
};
