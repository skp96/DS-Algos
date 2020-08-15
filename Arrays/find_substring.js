function findSubString(s, words) {
	if (!words || !words.length) return [];
	const wordSize = words[0].length;
	const windowSize = wordSize * words.length;
	const result = [];

	const freq = {};

	for (let word of words) {
		if (!freq[word]) {
			freq[word] = 1;
		} else {
			freq[word]++;
		}
	}

	for (let i = 0; i < s.length - (windowSize - 1); i++) {
		const reference = Object.assign({}, freq);

		for (let j = i; j < i + windowSize; j += wordSize) {
			const subString = s.substr(j, wordSize);

			if (!(subString in reference)) {
				break;
			} else {
				reference[subString]--;
			}

			if (reference[subString] === 0) delete reference[subString];
		}
		if (Object.keys(reference).length === 0) result.push(i);
	}
	return result;
}

// Time Complexity: O(n-k) * k, where k is the window size
// Space Complexity: O(w), where w is the total number of words in the words array

console.log(findSubString('barfoothefoobarman', [ 'foo', 'bar' ]));
