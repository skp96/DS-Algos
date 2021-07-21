const longestRangeBrute = (array) => {
  if (array.length === 0) return [-1, -1];

  array.sort((a, b) => a - b);

  let windowStart = 0;
  let longestRange = -Infinity;
  let values = [];

  for (let windowEnd = 1; windowEnd < array.length; windowEnd++) {
    if (array[windowEnd] !== array[windowEnd - 1]) {
      if (array[windowEnd] === array[windowEnd] + 1) {
        if (windowEnd - windowStart + 1 > longestRange) {
          longestRange = windowEnd - windowStart + 1;
          values = [array[windowStart], array[windowEnd]];
        }
      } else {
        windowStart = windowEnd;
      }
    }
  }
  return values;
};

// Time Complexity: O(NlogN);
// Space Complexity: O(1) or O(N)