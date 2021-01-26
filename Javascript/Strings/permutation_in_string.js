function permutationInString(s1, s2) {
	const freq = {};
	let counter = 0;

	for (let char of s1) {
		if (freq[char] === undefined) {
			freq[char] = 1;
			counter++;
		} else {
			freq[char]++;
		}
	}

	let begin = 0,
		end = 0;

	while (end < s2.length) {
		const lastChar = s2[end];

		if (freq[lastChar] !== undefined) {
			freq[lastChar]--;
			if (!freq[lastChar]) counter--;
		}

		end++;

		while (!counter) {
			if (end - begin === s1.length) return true;

			const startChar = s2[begin];

			if (freq[startChar] !== undefined) {
				freq[startChar]++;
				if (freq[startChar] > 0) counter++;
			}
			begin++;
		}
	}
	return false;
}

// Time Complexity: O(s1 + (s2 - s1))
// Space Complexith: O(1)

console.log(permutationInString('ab', 'eidbaooo'));
