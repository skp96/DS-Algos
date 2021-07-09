const findMaxInBitonicArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1
    }
  }
  return arr[start];
}

// Time Complexity: O(logN);
// Space Complexity: O(1);