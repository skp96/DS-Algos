function maxSubsetSumNoAdjacent(array) {
	if (!array.length) return 0;
	const table = new Array(array.length).fill(0);
	table[0] = array[0];

	for (let i = 1; i < table.length; i++) {
		const skipLeft = table[i - 2] === undefined ? 0 : table[i - 2];
		const sum = skipLeft + array[i];
		const prevSum = table[i - 1];
		table[i] = Math.max(sum, prevSum);
	}
	return table[table.length - 1];
}

// Time Complexity: O(n)
// Space complexity: O(n)
