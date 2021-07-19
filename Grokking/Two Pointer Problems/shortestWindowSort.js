const shortestWindowSort = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  };

  if (low === arr.length - 1) {
    return 0
  };

  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  let maxSub = -Infinity;
  let minSub = Infinity;

  for (let i = low; i <= high; i++) {
    maxSub = Math.max(maxSub, arr[i]);
    minSub = Math.min(maxSub, arr[i]);
  }

  while (low > 0 && arr[low - 1] > minSub) {
    low -= 1;
  } 

  while (high < arr.length - 1 && arr[high + 1] < maxSub) {
    hight += 1;
  }

  return high - low + 1;
}

// Time Complexity: O(N);
// Space Complexity: O(1);