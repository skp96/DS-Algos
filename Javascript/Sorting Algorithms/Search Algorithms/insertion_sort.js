function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let j = i;

		while (j > 0 && array[j] < array[j - 1]) {
			[ array[j], array[j - 1] ] = [ array[j - 1], array[j] ];
			j--;
		}
	}
	return array;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
