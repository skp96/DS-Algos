const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;

  const isAscending = arr[start] < arr[end]

  while (start <= end) {
    const mid = Math.floor(start + end / 2);

    if (key === arr[mid]) {
      return mid
    }

    if (isAscending) {
      if (key < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (key > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1
      }
    }
  }
  return -1
}

// Time Complexity: O(logN);
// Space Complexity: O(1);
