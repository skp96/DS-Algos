function caesarCipherEncryptor(string, key) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let result = '';

	for (let i = 0; i < string.length; i++) {
		let curChar = string[i];
		let curIdx = alphabet.indexOf(curChar);
		let newIdx = curIdx + key;
		result += alphabet[newIdx % alphabet.length];
	}
	return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
