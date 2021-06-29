const tripletsWithSmallerSum = (arr, target) => {
  arr.sort((a,b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    const remainingTarget = target - arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right){
      if (arr[left] + arr[right] < remainingTarget) {
        // since the array is sorted, arr[right] >= arr[left]; therefore, we can replace the number at
        // position right with any number up to but not including the number found at position left,
        // and will still have a sum less than the remaining target  
        count += (right - left);
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