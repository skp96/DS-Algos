const tripletSumCloseToTarget = (arr, targetSum) => {
  arr.sort((a,b) => a - b);
  let smallestDiff = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const difference = targetSum - (arr[i] + arr[left] + arr[right]);

      if (difference === 0) {
        return targetSum - difference;
      }

      // The second statement covers the case where there are two solutions, in this case we want the smallest sum (the largest difference)
      if (Math.abs(difference) < Math.abs(smallestDiff) || (Math.abs(difference) === Math.abs(smallestDiff) && difference > smallestDiff)) {
        smallestDiff = difference
      }

      if (difference > 0 ) {
        left += 1
      } else {
        right -= 1;
      }
    }
  }
  return targetSum - smallestDiff;
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);


