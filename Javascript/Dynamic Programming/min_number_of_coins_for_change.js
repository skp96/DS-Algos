function minNumberOfCoinsForChange(n, denoms, memo = {}) {
	const numWays = [];
	if (n === 0) return 0;
	if (n in memo) return memo[n];

	for (let denom of denoms) {
		if (denom <= n) {
			numWays.push(minNumberOfCoinsForChange(n - denom, denoms, memo) + 1);
		}
	}
	memo[n] = Math.min(...numWays);
	return memo[n];
}

function minNumberOfCoinsForChange(n, denoms) {
	const numOfCoins = new Array(n + 1).fill(Infinity);
	numOfCoins[0] = 0;

	for (let denom of denoms) {
		for (let amount = 1; amount <= n; amount++) {
			if (denom <= amount) {
				numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
			}
		}
	}
	return numOfCoins[n] === Infinity ? -1 : numOfCoins[n];
}

// Time Complexity: O(nd)
// Space Complexity: O(n)
