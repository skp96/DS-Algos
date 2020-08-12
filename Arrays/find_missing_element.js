function findMissingElement(array1, array2) {
	const my_obj = {};

	for (let num2 of array2) {
		my_obj[num2] = true;
	}

	for (let num1 of array1) {
		if (my_obj[num1] === undefined) {
			return num1;
		}
	}
}

// Time Complexity: O(n);
// Space Compleixty: O(n);

function findMissingElement2(array1, array2) {
	let sum1 = 0;
	let sum2 = 0;

	for (let num1 of array1) {
		sum1 += num1;
	}

	for (let num2 of array2) {
		sum2 += num2;
	}

	return sum1 - sum2;
}

// Time Complexity: O(n);
// Space Complexity: O(1);

const array1 = [ 1, 3, 5, 2, 4 ];
const array2 = [ 1, 5, 2, 4 ];

console.log(findMissingElement(array1, array2));
console.log(findMissingElement2(array1, array2));
