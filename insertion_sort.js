const insertionSort = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		let currEle = nums[i];
		let j = i - 1;
		while (j >= 0 && currEle < nums[j]) {
			nums[j + 1] = nums[j];
			j--;
		}
		nums[j + 1] = currEle;
	}
	return nums;
};
