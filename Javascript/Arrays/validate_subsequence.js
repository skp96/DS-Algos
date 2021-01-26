function isValidateSubsequence(array, sequence) {
	for (let num of array) {
		if (num === sequence[0]) {
			sequence.shift();
		}
	}
	return sequence.length === 0;
}

// Time Complexity = O(n)
// Space Complexity = O(1)

// Without mutating 'sequence' input
function isValidateSubsequence(array, sequence) {
	let seqIdx = 0;

	for (let num of array) {
		if (seqIdx === sequence.length) break;
		if (sequence[seqIdx] === num) seqIdx++;
	}
	return seqIdx === sequence.length;
}

const array = [ 5, 1, 22, 25, 6, -1, 8, 10 ];
const sequence = [ 1, 6, -1, 10 ];
console.log(isValidateSubsequence(array, sequence));
