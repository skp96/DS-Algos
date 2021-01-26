const bubbleSort = (nums) => {
	let swap = true;

	while (swap) {
		swap = false;

		for (let i = 0; i < nums.length; i++) {
			if (nums[i] > nums[i + 1]) {
				[ nums[i], nums[i + 1] ] = [ nums[i + 1], nums[i] ];
				swap = true;
			}
		}
	}
	return nums;
};
