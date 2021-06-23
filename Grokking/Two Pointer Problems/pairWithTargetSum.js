const pairWithTargetSum = (arr, targetSum) => {
  let leftPointer = 0
  let rightPointer = arr.length - 1

  while (leftPointer < rightPointer) {
    let leftNum = arr[leftPointer]
    let rightNum = arr[rightPointer]

    if (leftNum + rightNum === targetSum) {
      return [leftPointer, rightPointer]
    } else if (leftPointer + rightNum < targetSum) {
      leftPointer++
    } else {
      rightPointer--
    }
  }
  return [-1, -1]
}

// Time Complexity: O(N)
// Space Complexity: O(1)