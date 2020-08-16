function minWindowSubstring(s, t) {
	const freq = {};
	let counter = 0;
	let minLen = 0,
		start = 0;
	let left = 0,
		right = 0;

	for (let char of t) {
		if (!freq[char]) {
			counter++;
			freq[char] = 1;
		} else freq[char]++;
	}

	while (right < s.length) {
		if (freq[s[right]] !== undefined) {
			freq[s[right]]--;
			if (!freq[s[right]]) counter--;
		}

		while (!counter) {
			if (!minLen || right - left + 1 < minLen) {
				minLen = right - left + 1;
				start = left;
			}
			if (freq[s[left]] !== undefined) {
				if (!freq[s[left]]) counter++;
				freq[s[left]]++;
			}
			left++;
		}
		right++;
	}
	return s.substr(start, start + minLen);
}

// Time Complexity: O(s + t)
// Space Complexity: O(t)

console.log(minWindowSubstring('aaab', 'aba'));
// console.log(minWindowSubstring('bdc', 'bc'));
