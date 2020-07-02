function productSum(array, depth = 1) {
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		const num = array[i];

		if (Array.isArray(num)) {
			sum += productSum(num, depth + 1);
		} else {
			sum += num;
		}
	}
	return sum * depth;
}

// Time Complexity - O(n)
// Space Complexity - O(d)
