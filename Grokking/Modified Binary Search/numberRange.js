const findRange = (arr, key) => {
  const result = [-1, -1];
  result[0] = binarySearch(arr, key, false);
  if (result[0] !== 1) {
    result[1] = binarySearch(arr, key, true);
  }
  return result;
}

const binarySearch = (arr, key, findMaxIndex) {
  let keyIndex = -1;
  let start = 0; 
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1
    } else {
      keyIndex = mid;
      if (findMaxIndex) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return keyIndex;
}

// Time Complexity: O(logN), we're reducing the search range by half at every step
// Space Complexity: O(1)