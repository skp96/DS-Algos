const makeSquares = (arr) => {
  const squares = []
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    const leftSq = arr[leftPointer]**2
    const rightSq = arr[rightPointer]**2

    if (rightSq > leftSq) {
      squares.unshift(rightSq)
      rightPointer--
    } else {
      squares.unshift(leftSq)
      leftPointer++
    }
  }
  return squares
}

// Time complexity: O(N)
// Space Complexity: O(N)

console.log(makeSquares([-3, -1, 0, 1, 2]))