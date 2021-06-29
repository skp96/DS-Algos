const tripletSumCloseToTarget = (arr, targetSum) => {
  arr.sort((a,b) => a - b);
  let smallestDifference = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const targetDiff = targetSum - (arr[i] + arr[left] + arr[right]);

      if (targetDiff === 0) {
        return targetSum - targetDiff;
      }
      // The second statement covers the case where there are two solutions, in this case we want the smallest sum (the largest difference)
      if (Math.abs(targetDiff) < Math.abs(smallestDifference) || (Math.abs(targetDiff) === Math.abs(smallestDifference) && targetDiff > smallestDifference)) {
        smallestDifference = targetDiff;
      }

      if (targetDiff > 0) {
        left += 1 // need a triplet with a bigger sum
      } else {
        right -= 1;
      }
    }
  }
  return targetSum - smallestDifference;
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);