// function twoNumberSum(array, targetSum) {
// 	const result = [];

// 	for (let i = 0; i < array.length; i++) {
// 		let num1 = array[i];
// 		for (let j = i + 1; j < array.length; j++) {
// 			let num2 = array[j];
// 			if (num1 + num2 === targetSum) {
// 				result.push(num1);
// 				result.push(num2);
// 			}
// 		}
// 	}
// 	return result;
// }
//  Time Complexity - O(n^2)
//  Space Complexity - O(n)

// Optimized Solution
// function twoNumberSum(array, targetSum) {
// 	const set = new Set();

// 	for (let num1 of array) {
// 		const num2 = targetSum - num1;
// 		if (set.has(num2)) {
// 			return [ num1, num2 ];
// 		} else {
// 			set.add(num1);
// 		}
// 	}
// 	return [];
// }

// Time Complexity - O(n)
// Space Complexity - O(n)

// More Optimization
function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		const sum = array[left] + array[right];

		if (sum === targetSum) {
			return [ array[left], array[right] ];
		} else if (sum < targetSum) {
			left++;
		} else {
			right--;
		}
	}
	return [];
}

// Time Complexity - O(nlog(n))
// Space Complexity - O(1)

const array = [ 3, 5, -4, 8, 11, 1, -1, 6 ];
const targetSum = 10;
console.log(twoNumberSum(array, targetSum));
