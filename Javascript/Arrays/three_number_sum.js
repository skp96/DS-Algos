function threeNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	const result = [];

	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		let currentNum = array[i];

		while (left < right) {
			const sum = currentNum + array[left] + array[right];

			if (sum === targetSum) {
				result.push([ currentNum, array[left], array[right] ]);
				left++;
				right--;
			} else if (sum < targetSum) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)
