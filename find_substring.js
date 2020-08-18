function findSubstring1(text, word) {
	for (let i = 0; i < text.length - (word.length - 1); i++) {
		let match = true;

		for (let j = 0; j < word.length; j++) {
			if (word[j] !== text[j + i]) {
				match = false;
				break;
			}
		}
		if (match) return true;
	}
	return false;
}

// Time Complexity: O(t*w), where t is the length of text and w is the length of w
// Space Complexity: O(1)

function findSubString2(text, word) {
	const lps = [ 0 ];
	let j = 1,
		len = 0;

	while (j < word.length) {
		if (word[j] === word[len]) {
			len++;
			lps.push(len);
			j++;
		} else if (len > 0) {
			len = lps[len - 1];
		} else {
			lps[j] = 0;
			j++;
		}
	}
	let i = 0;
	k = 0;

	while (i < text.length) {
		if (text[i] === word[k]) {
			i++;
			k++;
		}
		if (k === word.length) {
			return true;
		} else if (i < text.length && text[i] !== word[k]) {
			if (k !== 0) {
				k = lps[k - 1];
			} else {
				i++;
			}
		}
	}
	return false;
}

// Time Complexity: O(t), where t is the length of text
// Space Complexity: O(w), where w is the length of word

console.log(findSubString2('duceduck', 'duck'));
