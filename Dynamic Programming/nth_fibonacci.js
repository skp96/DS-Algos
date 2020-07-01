function getNthFibRecur(n, memoize = { 1: 0, 2: 1 }) {
	if (n in memoize) {
		return memoize[n];
	} else {
		memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
		return memoize[n];
	}
}

function getNthFibIter(n) {
	const fibNumbs = [ 0, 1 ];
	if (n === 1 || n === 2) return fibNumbs[n - 1];

	while (fibNumbs.length < n) {
		const nextFibNum = fibNumbs[0] + fibNumbs[1];
		fibNumbs[0] = fibNumbs[1];
		fibNumbs[1] = nextFibNum;
	}
	return fibNumbs[1];
}

// Time Complexity: O(n)
// Space Complexity: O(1)
