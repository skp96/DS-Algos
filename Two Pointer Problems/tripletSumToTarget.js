const tripletSumToTarget = (arr, targetSum) =>  {
  arr.sort((a,b) => a - b);
  smallestDiff = Infinity;

  for (let i = 0; i < arr.length-2; i++) {
    let leftPointer = i + 1;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
      const targetDiff = target_sum - arr[i] - arr[leftPointer] - arr[rightPointer];
      if (targetDiff === 0) {
        return target_sum - targetDiff
      } else if (targetDiff > 0) {
        leftPointer++
      } else {
        rightPointer--
      }

      if (Math.abs(targetDiff) < Math.abs(smallestDiff) ||
        (Math.abs(targetDiff) === Math.abs(smallestDiff) && targetDiff > smallestDiff)) {
        smallestDiff = targetDiff; 
      }
    }
  }
  return target_sum - smallestDiff
}

// Time Complexity: O(nlogn + n^2) ==> O(n^2)
// Space Complexity: O(n)