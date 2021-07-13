const pair_with_targetsum = function(arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currSum = arr[left] + arr[right];
    if (currSum === target_sum) {
      return [left, right]
    } else if (target_sum > currSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return [-1, -1];
}

// Time Complexity: O(N);
// Space Complexity: O(1);