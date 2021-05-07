const tripletWithSmallerSum = (arr, target) => {
  arr.sort((a,b) => a - b);
  count = 0;

  for (let i = 0; i < arr.length; i++) {
    const remainingTarget = target - arr[i];
    let leftPointer = i + 1
    let rightPointer = arr.length - 1

    while (leftPointer < rightPointer) {
      const sum = arr[leftPointer] + arr[rightPointer]

      if (sum < remainingTarget) {
        count += rightPointer - leftPointer
        leftPointer++
      } else {
        rightPointer--
      }
    }
  }
  return count
}

// Time Complexity: O(nlogn + n^2) ==> O(n^2)
// Space Complexity: O(n^2)