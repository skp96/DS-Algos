function smallest_difference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let min = Infinity;
	let onePointer = 0;
	let twoPoiner = 0;
	let result = [];

	while (onePointer < arrayOne.length && twoPoiner < arrayTwo.length) {
		let num1 = arrayOne[onePointer];
		let num2 = arrayTwo[twoPoiner];
		let absDiff = Math.abs(num1 - num2);

		if (absDiff === 0) {
			return [ num1, num2 ];
		} else if (absDiff < min) {
			result = [ num1, num2 ];
			min = absDiff;
		}

		if (num1 <= num2) {
			onePointer++;
		} else {
			twoPoiner++;
		}
	}
	return result;
}

// Time Complexity: O(nlog(n) + mlog(m))
// Space Complexity: O(1)
