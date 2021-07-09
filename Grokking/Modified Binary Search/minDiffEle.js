const searchMinDiffElement = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let diff = Infinity;
  let smallest;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const absDiff = Math.abs(key - arr[mid]);

    if (absDiff < diff) {
      diff = absDiff;
      smallest = arr[mid];
    }

    if (key > arr[mid]) {
      start = mid + 1;
    } else if (key < arr[mid]) {
      end = mid - 1;
    } else {
      return arr[mid]
    }
  }
  return smallest;
}

// Time Complexity: O(logN);
// Space Complexity: O(1);