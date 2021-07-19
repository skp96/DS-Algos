const dutchFlagSort = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  let i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];

      i += 1;
      low += 1
    } else if (arr[i] === 1) {
      i += 1;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];

      high -= 1;
    }
  }
  return arr;
}

// Time Complexity: O(N);
// Space Complexity: O(1);