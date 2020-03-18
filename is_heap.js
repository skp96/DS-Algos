// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {
	if (array[idx] === undefined) return true;
	const leftIdx = idx * 2;
	const rightIdx = idx * 2 + 1;
	const leftValue = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
	const rightValue = array[rightIdx] === undefined ? -Infinity : array[rightIdx];

	return array[idx] > leftValue && array[idx] > rightValue && isMaxHeap(array, leftIdx) && isMaxHeap(array, rightIdx);
}
