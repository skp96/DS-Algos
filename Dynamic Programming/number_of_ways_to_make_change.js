function numberOfWaysToMakeChange(n, denoms, memo = {}) {
	if (n === 0) return 1;
	if (denoms.length === 0) return 0;

	let key = `${n}-${denoms.join(',')}`;
	if (key in memo) return memo[key];

	let coinVal = denoms[denoms.length - 1];
	let numWays = 0;

	for (let quantity = 0; coinVal * quantity <= n; quantity++) {
		numWays += numberOfWaysToMakeChange(n - quantity * coinVal, denoms.slice(0, -1), memo);
	}
	memo[key] = numWays;
	return numWays;
}

// Time Complexity: O(n X d)
// Space Complexity: O(n)

function numberOfWaysToMakeChange(n, denoms) {
	const ways = new Array(n + 1).fill(0);
	ways[0] = 1;
	for (let denom in denoms) {
		for (let amount = 1; amount <= n; amount++) {
			if (denom <= amount) {
				ways[amount] += ways[amount - denoms];
			}
		}
	}
	return ways[n];
}

// Time Complexity: O(n X d)
// Space Complexity: O(n)
