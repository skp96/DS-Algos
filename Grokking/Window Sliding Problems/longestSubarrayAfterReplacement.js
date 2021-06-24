const longestSubarrayAfterReplacement = (arr, k) => {
  let longestSubarray = 0;
  let onesCount = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      onesCount++;
    }

    if ((windowEnd - windowStart + 1) - onesCount > k) {
      if (arr[windowStart] === 1) onesCount--;
      windowStart++;
    }

    longestSubarray = Math.max(longestSubarray, windowEnd - windowStart + 1);
  }
  return longestSubarray;
}

// Time Complexity: O(N);
// Space Complexity: O(1);