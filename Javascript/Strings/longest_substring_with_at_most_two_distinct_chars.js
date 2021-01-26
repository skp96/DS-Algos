function lengthOfLongestSubstringTwoDistinct(s) {
	let distinctCounter = 0;
	let begin = 0,
		end = 0;
	let maxLen = 0;
	const freq = {};

	while (end < s.length) {
		const lastChar = s[end];

		if (freq[lastChar] === undefined) {
			freq[lastChar] = 1;
			distinctCounter++;
		} else {
			freq[lastChar]++;
		}
		end++;

		while (distinctCounter > 2) {
			const startChar = s[begin];

			if (freq[startChar] !== undefined) {
				freq[startChar]--;
				if (!freq[startChar]) distinctCounter--;
			}
			begin++;
		}
		maxLen = Math.max(maxLen, end - begin);
	}
	return maxLen;
}

// Time Complexity: O(s);
// Space Complexity: O(s);

console.log(lengthOfLongestSubstringTwoDistinct('eceba'));
