const maxSubArrayOfSizeKBrute = (arr, k) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0
    for (let j = i; i < i + k; j++) {
      sum += arr[j];
    }
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum;
}

// Time Complexity: O(N^2);
// Space Complexity: O(N);

const maxSubArrayOfSizeKOptimized = (arr, k) => {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let rightNum = arr[windowEnd];
    windowSum += rightNum;

    if (windowEnd >= k) {
      let leftNum = arr[windowStart];
      windowSum -= leftNum;
      windowStart++
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// Time Complexity: O(N);
// Space Complexity: O(1);