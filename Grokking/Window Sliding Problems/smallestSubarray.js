const smallestSubarrayWithGivenSumBrute = function(s, arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let windowSum = 0;
    for (let j = i; j < arr.length; j++) {
      windowSum += arr[j];
      if (windowSum >= s) {
        smallest = Math.min(smallest, j - i + 1);
        break;
      }
    }
  }
  return smallest;
};

// Time Complexity: O(N^2);
// Space Complexity: O(1);


const smallestSubarrayWithGivenSumOptimized = (arr, s) => {
  let smallest = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum > s) {
      smallest = Math.min(smallest, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++
    }
  }
  return smallest;
}

// Time Complexity: O(N);
// Space Complexity: O(1);