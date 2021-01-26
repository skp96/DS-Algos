// Write a function that takes in an array of integers and returns
// a boolean representing whether the array is monotonic.
// An array is said to be monotonic if its elements, from left to right, are
// entirely non-increasing or entirely non-decreasing

function isMonotonic(array) {
	if (array.length <= 2) return true;
	const lastEle = array[array.length - 1];
	const firstEle = array[0];
	const increasing = lastEle > firstEle ? true : false;

	for (let i = 0; i < array.length - 1; i++) {
		let currEle = array[i];
		let nextEle = array[i + 1];

		if (increasing && currEle > nextEle) {
			return false;
		} else if (!increasing && currEle < nextEle) {
			return false;
		}
	}
	return true;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
