const longestPeak = (array) => {
  let longestPeak = 0;
  let i = 1;

  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak) {
      i += 1;
      continue;
    }

    let left = i - 2;
    while (left >= 0 && array[left] < array[left + 1]) {
      left -= 1;
    }

    let right = i + 2;
    while (right < array.length && array[right] < array[right - 1]) {
      right += 1;
    }

    const currentPeakLength = right - left - 1;
    longestPeak = Math.max(longestPeak, currentPeakLength);
    i = right;
  }
  return longestPeak;
}

// Time Complexity: O(N);
// Space Complexity: O(1);