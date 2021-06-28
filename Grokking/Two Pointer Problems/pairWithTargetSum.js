const pair_with_targetsum = function(arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const num1 = arr[left];
    const num2 = arr[right];

    if (num1 + num2 === target_sum) {
      return [left, right]
    } else if (num1 + num2 < target_sum) {
      left += 1;
    } else {
      right -= 1
    }
  }
  return [-1, -1];
}

// Time Complexity: O(N);
// Space Complexity: O(1);