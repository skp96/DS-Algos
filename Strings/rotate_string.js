function rotateString1(A, B) {
	const allRotations = A + A;

	if (A.length === A.length && allRotations.indexOf(B) !== -1) return true;
	return false;
}

// Time Complexity: O(n^2), where n is the length of s
// Space Complexity: O(n+n), space used to create string of size s1+s1

function rotateString2(text, word) {
	let j = 1;
	let len = 0;
	const lps = [ 0 ];

	while (j < word.length) {
		if (word[j] === word[len]) {
			j++;
			len++;
			lps.push(len);
		} else if (len > 0) {
			len = lps[len - 1];
		} else {
			lps.push(0);
			j++;
		}
	}

	let i = 0;
	let k = 0;

	while (i < text.length) {
		if (text[i] === word[k]) {
			i++;
			k++;
		} else if (k > 0) {
			k = lps[k - 1];
		} else {
			i++;
		}
	}
	return word.slice(j) === text.slice(0, text.length - j);
}

// Time Complexity: O(t), where t is length of text
// Time Complexity: O(w), where w is the length of word

// console.log(rotateString('abcde', 'abced'));
console.log(rotateString2('abcde', 'cdeab'));
