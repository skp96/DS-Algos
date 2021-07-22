const shortestWindowSort = (arr) => {
  let minOutOfOrder = Infinity;
  let maxOutofOrder = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (outOfOrder(arr[i], i, arr)) {
      minOutOfOrder = Math.min(minOutOfOrder, arr[i]);
      maxOutofOrder = Math.max(maxOutofOrder, arr[i]);
    }
  }
  
  if (minOutOfOrder === Infinity) return 0
  let leftIdx = 0;

  while (minOutOfOrder >= arr[leftIdx]) {
    leftIdx += 1;
  }

  let rightIdx = arr.length - 1
  while (maxOutofOrder <= arr[rightIdx]) {
    rightIdx -= 1;
  }

  return rightIdx - leftIdx + 1;
}

const outOfOrder = (num, idx, arr) => {
  if (idx === 0) return num > arr[idx + 1];
  if (idx === arr.length - 1) return num < arr[idx - 1];

  return num < arr[idx - 1] || num > arr[idx + 1];
}

// Time Complexity: O(N);
// Space Complexity: O(1);