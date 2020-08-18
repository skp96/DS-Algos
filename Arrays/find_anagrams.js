function findAnagrams(s, p) {
	const freq = {};
	let counter = 0;
	const result = [];
	let start = 0;
	let finish = 0;

	for (let char of p) {
		if (!freq[char]) {
			freq[char] = 1;
			counter++;
		} else {
			freq[char]++;
		}
	}

	while (finish < s.length) {
		if (freq[s[finish]] !== undefined) {
			freq[s[finish]]--;
			if (!freq[s[finish]]) counter--;
		}

		while (counter === 0) {
			let anagram = s.slice(start, finish + 1);
			console.log(anagram);
			if (anagram.length === p.length) result.push(start);

			if (freq[s[start]] !== undefined) {
				if (!freq[s[start]]) counter++;
				freq[s[start]]++;
			}
			start++;
		}
		finish++;
	}
	return result;
}

// Time Complexity: O(s + p)
// Space Complexity: O(1)

// console.log(findAnagrams('abab', 'ab'));
// console.log(findAnagrams('cbaebabacd', 'abc'));
// console.log(findAnagrams('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'));
