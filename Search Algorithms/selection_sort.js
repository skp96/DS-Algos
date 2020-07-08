function selection_sort(array) {
	for (let i = 0; i < array.length; i++) {
		let minIdx = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[minIdx] > array[j]) {
				minIdx = j;
			}
		}
		[ array[i], array[minIdx] ] = [ array[minIdx], array[i] ];
	}
	return array;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
