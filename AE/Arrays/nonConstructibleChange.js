const nonConstructibleChange = (coins) => {
  coins.sort((a, b) => a - b);
  let changeCreated = 0;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    if (coin > changeCreated + 1) return changeCreated + 1;
    changeCreated += coin;
  }
  return changeCreated + 1;
}

// Time Complexity: O(NlogN);
// Space Complexity: O(1);