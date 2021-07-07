const searchCeilingOfANumber = (arr, key) => {
  if (key > arr[arr.length - 1]) {
    return -1;
  }

  let start = 0; 
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      return mid
    }
  }
  
  return start;
}

// Time Complexity: O(logN);
// Space Complexity: O(1);