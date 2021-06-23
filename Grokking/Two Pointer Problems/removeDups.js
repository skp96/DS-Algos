const removeDuplicates = (arr) => {
  let nonDup = 1
  let next = 1

  while (next < arr.length) {
    if (arr[nonDup - 1] !== arr[next]) {
      arr[nonDup] = arr[next]
      nonDup++
    }
    next++
  }
  return nonDup
}

// Time Complexity: O(N)
// Space Complexity: O(1)