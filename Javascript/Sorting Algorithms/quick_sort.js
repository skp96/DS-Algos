const quickSort = (nums) => {
	if (nums.length <= 1) return nums;

	const pivot = array.shift();
	const left = array.filter((el) => el <= pivot);
	const right = array.filter((el) => el > pivot);

	const leftSorted = quickSort(left);
	const rightSorted = quickSort(right);

	return [ ...leftSorted, pivot, ...rightSorted ];
};
