// function moveElmentToEnd(array, toMove) {
// 	let i = 0;

// 	while (i < array.length) {
// 		if (array[i] === toMove) {
// 			for (let j = i + 1; j < array.length; j++) {
// 				if (array[i] !== array[j]) {
// 					[ array[i], array[j] ] = [ array[j], array[i] ];
// 					break;
// 				}
// 			}
// 		}
// 		i++;
// 	}
// 	return array;
// }

// Time Complexity: O(n^2)
// Space Compleixty: O(1)

function moveElmentToEnd(array, toMove) {
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		while (left < right && array[right] === toMove) right--;
		if (array[left] === toMove) {
			[ array[left], array[right] ] = [ array[right], array[left] ];
		}
		left++;
	}
	return array;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
