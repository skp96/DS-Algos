const makeSquares = (arr) => {
  const squares = new Array(arr.length);
  let highIdx = squares.length - 1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const sqr1 = arr[left] ** 2;
    const sqr2 = arr[right] ** 2;

    if (sqr1 > sqr2) {
      squares[highIdx] = sqr1;
      left += 1
    } else {
      squares[highIdx] = sqr2
      right -= 1;
    }
    highIdx -= 1;
  }
  return squares
}

// Time Complexity: O(N);
// Space Complexity: O(N);