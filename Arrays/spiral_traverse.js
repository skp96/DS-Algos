function spiralTraverseIter(array) {
	const result = [];
	let sR = 0;
	let eR = array.length - 1;
	let sC = 0;
	let eC = array[0].length - 1;

	while (sR <= eR && sC <= eC) {
		for (let col = sC; col <= eC; col++) {
			result.push(array[sR][col]);
		}

		for (let row = sR + 1; row <= eR; row++) {
			result.push(array[row][eC]);
		}

		for (let col = eC - 1; col >= sC; col--) {
			if (sR === eR) break;
			result.push(array[eR][col]);
		}

		for (let row = eR - 1; row > sR; row--) {
			if (sC === eC) break;
			result.push(array[row][sC]);
		}

		sR++;
		eR--;
		sC++;
		eC--;
	}
	return result;
}

// Time Complexity: O(N), where N is total number of elements in the two dimensional array
// Space Complexity: O(N)

function spiralTraverseRecur(array) {
	let result = [];
	fillSpiral(array, 0, array.length - 1, 0, array[0].length - 1, result);
	return result;
}

function fillSpiral(array, startRow, endRow, startCol, endCol, result) {
	if (startRow > endRow || startCol > endCol) return;

	for (let col = startCol; col <= endCol; col++) {
		result.push(array[startRow][col]);
	}

	for (let row = startRow + 1; row <= endRow; row++) {
		result.push(array[row][endCol]);
	}

	for (let col = endCol - 1; col >= startCol; col--) {
		if (startRow === endRow) break;
		result.push(array[endRow][col]);
	}

	for (let row = endRow - 1; row > startRow; row--) {
		if (startCol === endCol) break;
		result.push(array[row][startCol]);
	}

	fillSpiral(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
}

// Time Complexity: O(N), where N is total number of elements in the two dimensional array
// Space Complexity: O(N)
