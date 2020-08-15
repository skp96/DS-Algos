function findSubString1(s, words) {
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

function findSubString(s, words) {
	const wordSize = words[0].length;
	const windowSize = wordSize * words.length;
	const result = [];
	let counter = 0;

	const freq = {};
	for (let word of words) {
		if (!freq[word]) {
			counter++;
			freq[word] = 1;
		} else {
			freq[word]++;
		}
	}

	for (let i = 0; i < wordSize; i++) {
		const reference = Object.assign({}, freq);
		let refCounter = counter;
		let start = i,
			finish = i;

		while (finish + wordSize - 1 < s.length) {
			// want to iterate up to last char in string, since we are indexing subtract by 1
			const finishSubString = s.substr(finish, wordSize);

			if (reference[finishSubString] !== undefined) {
				reference[finishSubString]--;
				if (!reference[finishSubString]) refCounter--;
			}

			if (finish + wordSize - start === windowSize) {
				// location of the finish character + word size will give us the right bound of the window, and start gives us the left bound of the window, if you substract the two, you get the windowSize
				if (refCounter === 0) {
					result.push(start);
				}

				const startSubString = s.substr(start, wordSize);

				if (reference[startSubString] !== undefined) {
					if (!reference[startSubString]) refCounter++;
					reference[startSubString]++;
				}
				start += wordSize;
			}
			finish += wordSize;
		}
	}
	return result;
}

// Time Complexity: O(s + w), where w is the length of the words array
// Space Complexity: O(w), where w is the length of the words array

// console.log(findSubString('barfoothefoobarman', [ 'foo', 'bar' ]));
console.log(findSubString('wordgoodgoodgoodbestword', [ 'word', 'good', 'best', 'good' ]));
