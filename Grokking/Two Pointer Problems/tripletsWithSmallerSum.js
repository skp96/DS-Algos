const tripletsWithSmallerSum = (arr, target) => {
  arr.sort((a,b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      if (arr[i] + arr[left] + arr[right] < target) {
        count += (right - left)
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return count;
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);