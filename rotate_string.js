function rotateString1(A, B) {
	const allRotations = A + A;

	if (A.length === A.length && allRotations.indexOf(B) !== -1) return true;
	return false;
}

// Time Complexity: O(n^2), where n is the length of s
// Space Complexity: O(n+n), space used to create string of size s1+s1

function rotateString2(A, B) {}

// console.log(rotateString('abcde', 'abced'));
console.log(rotateString2('abcde', 'cdeab'));
