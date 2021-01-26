function palindromeCheck(string) {
	for (let i = 0; i < Math.floor(string.length / 2); i++) {
		let frontChar = string[i];
		let rearChar = string[string.length - 1 - i];

		if (frontChar !== rearChar) {
			return false;
		}
	}
	return true;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
