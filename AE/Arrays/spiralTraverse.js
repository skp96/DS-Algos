const spiralTraverse = (array) => {
  const result = []
  let startCol = 0;
  let endCol = array[0].length - 1;

  let startRow = 0;
  let endRow = array.length - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let col = startCol; col < endCol; col++ ) {
      const num = array[startRow][col]
      result.push(num);
    }

    for (let row = startRow; row < endRow + 1; row++) {
      const num = array[row][endCol];
      result.push(num);
    }

    if (startCol < endCol && startRow < endRow) {
      for (let col = endCol - 1; col >= startRow; col--) {
        const num = array[endRow][col]
        result.push(num);
      }

      for (let row = endRow - 1; row > startRow; row--) {
        const num = array[row][startCol];
        result.push(num);
      }
    }
    startCol += 1;
    endCol -= 1;

    startRow += 1;
    endRow -= 1;
  }
  return result;
}

// Time Complexity: O(N), where N is the total number of elements in the input matrix
// Space Complexity: O(N), where N is the total number of elements stored in the array