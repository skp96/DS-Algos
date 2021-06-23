/*
  - Problem: Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s
  - Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
  - Output: 6
  - Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
*/

const lengthOfLongestSubarrayBrute = (arr, k) => {
  const isReplaceable = (start, end) => {
    let onesFreq = 0

    for (let i = start; i <= end; i++) {
      const num = arr[i]
      if (num === 1) onesFreq += 1
    }

    if ((end - start + 1) - onesFreq > k) {
      return false
    }
    return true
  }

  maxLength = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (isReplaceable(i, j)) {
        maxLength = Math.max(maxLength, j - i + 1)
      }
    }
  }
  return maxLength
}

// Time Complexity: O(N^3)
// Space Complexity: O(1)

const lengthOfLongestSubarrayOpt = (arr, k) => {
  let onesFreq = 0, maxLength = 0, windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const num = arr[windowEnd];
    if (num === 1) onesFreq += 1;

    if ((windowEnd - windowStart + 1) - onesFreq > k) {
      const leftNum = arr[windowStart];
      if (leftNum === 1) onesFreq -= 1;
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

// Time Complexity: O(N), where N is the number of elements in the array
// Space Complexity: O(1)