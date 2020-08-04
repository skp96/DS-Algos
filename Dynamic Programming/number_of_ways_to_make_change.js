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
