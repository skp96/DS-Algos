function lengthOfLongestSubString1(s) {
	let result = 0;

	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j < s.length; i++) {
			if (allUnique(s, i, j)) {
				result = Math.max(result, j - i);
			}
		}
	}
	return result;
}

function allUnique(s, start, end) {
	const set = new Set();

	for (let i = start; i < end; i++) {
		const char = s[start];
		if (set.has(char)) return false;
		set.add(char);
	}
	return true;
}

// Time Complexity: O(n^3)
// Space Complexity: O(1)

function lengthOfLongestSubString2(s) {
	let longest = '';
	let len = 0;
	const seen = {};
	let begin = 0,
		end = 0;

	while (end < s.length) {
		const current = s[end];

		if (seen[current] !== undefined && seen[current] >= begin) {
			begin = seen[current] + 1;
		} else {
			seen[current] = end;
			end++;
		}

		if (end - begin > len) {
			len = end - begin;
			longest = s.substr(begin, end - begin);
			console.log(longest, begin, end, seen);
		}
	}
	return longest;
}

// Time Complexity: O(s)
// Space Complexity: O(1)

console.log(lengthOfLongestSubString2('abcabcbb'));
