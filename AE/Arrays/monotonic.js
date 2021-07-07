const isMonotonic = (array) => {
  if (array.length <= 2) return true;

  const increasing = array[array.length - 1] > array[0] ? true : false;

  for (let i = 1; i < array.length; i++) {
    const currElement = array[i];
    const prevElement = array[i - 1];

    if (increasing && currElement < prevElement) {
      return false;
    } else if (!increasing && currElement > prevElement) {
      return false;
    }
  }
  return true;
}

// Time Complexity: O(N);
// Space Complexity: O(1);