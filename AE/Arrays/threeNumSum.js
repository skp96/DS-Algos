const threeNumSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < array.length - 2; i++) {
    const remainingTargetSum = targetSum - array[i];
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      if (array[left] + array[right] === remainingTargetSum) {
        result.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (array[left] + array[right] < remainingTargetSum) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return result;
}

// Time Complexity: O(N^2);
// Space Complexity: O(N);