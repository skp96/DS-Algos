function maxSumOfKConsecutive1(n, array, k) {
	let max_sum = -Infinity;

	for (let i = 0; i < n - k + 1; i++) {
		let num1 = array[i];
		for (let j = i; j < k; j++) {
			let num2 = array[i + j];
			max_sum = Math.max(max_sum, num1 + num2);
		}
	}
	return max_sum;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function maxSumOfKConsecutive2(n, array, k) {
	let max_sum = -Infinity;
	let sum = 0;

	for (let i = 0; i < k; i++) {
		sum += array[i];
	}

	for (let i = k; i < n; i++) {
		sum = sum - array[i - k] + array[i];
		max_sum = Math.max(max_sum, sum);
	}
	return max_sum;
}

// Time Complexity: O(n);
// Space Complexity: O(1);

const n = 4;
const nums = [ 100, 200, 300, 400 ];
const k = 2;

console.log(maxSumOfKConsecutive2(n, nums, k));
