const makeSquares = (arr) => {
  const sortedSquares = new Array(arr.length);
  let highestIdx = sortedSquares.length - 1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right){
    const square1 = arr[left] ** 2;
    const square2 = arr[right] ** 2;

    if (square1 < square2) {
      sortedSquares[highestIdx] = square2;
      highestIdx -= 1;
      right -= 1;
    } else {
      sortedSquares[highestIdx] = square1;
      highestIdx -= 1;
      left += 1;
    }
  }
  return sortedSquares
}

// Time Complexity: O(N);
// Space Complexity: O(N);