function binarySearch(array, target) {
	if (!array.length) return -1;

	const midIdx = Math.floor(array.length / 2);

	const leftHalf = array.slice(0, mid);
	const rightHalf = array.slice(mid + 1);

	if (target === array[midIdx]) {
		return midIdx;
	} else if (target < array[midIdx]) {
		return binarySearch(leftHalf, target);
	} else {
		const searchResult = binarySearch(rightHalf, target);
		return searchResult === -1 ? -1 : midIdx + searchResult + 1;
	}
}

// Time Complexity: O(log(n))
// Space Complexity: O(n)

function binarySearch(array, target, left = 0, right = array.length - 1) {
	while (left <= right) {
		const midIdx = Math.floor(left + right / 2);
		const potentialMatch = array[midIdx];

		if (target === potentialMatch) {
			return midIdx;
		} else if (target < potentialMatch) {
			right = midIdx - 1;
		} else {
			left = midIdx + 1;
		}
	}
	return -1;
}

// Time Complexity: O(log(n))
// Space Complexity: O(1)
