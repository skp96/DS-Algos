const findDuplicateValueBrute = (array) => {
  let minIdx = array.length;

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const valueToCompare = array[j];

      if (value === valueToCompare) {
        minIdx = Math.min(minIdx, j)
      }
    }
  }
  if (minIdx === array.length) return -1;

  return array[minIdx];
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);

const findDuplicateValueOptimized = (array) => {
  const seen = new Set();

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if(seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}

// Time Complexity: O(N);
// Space Complexity: O(N);

const findDuplicateValueOptimizedII = (array) => {
  for (let i = 0; i < array.length; i++) {
    const absValue = Math.abs(array[i]);
    const correctLocationOfValue = absValue - 1;

    if (array[correctLocationOfValue] < 0) return absValue;
    array[correctLocationOfValue] *= -1;
  }
  return -1;
}

// Time Complexity: O(N);
// Space Complexity: O(1)l