const zigzagTraverse = (array) => {
  const height = array.length - 1;
  const width = array[0].length - 1;

  const result = [];
  let row = 0;
  let col = 0;
  let goingDown = true;

  while (!isOutOfBounds(row, col, height, width)) {
    result.push(array[row][col]);

    if (goingDown) {
      if (col === 0 || row === height) {
        goingDown = false;

        if (row === height) {
          col += 1;
        } else {
          row += 1
        }
      } else {
        row += 1;
        col -= 1;
      }
    } else {
      if (row === 0 || col === width) {
        goingDown = true;

        if (col === width) {
          row += 1;
        } else {
          col += 1
        }
      } else {
        row += 1;
        col += 1;
      }
    }
  }
  return result;
}

const isOutOfBounds = (row, col, height, width) => {
  return row < 0 || row > height || col < 0 || col > width;
}

// Time Complexity: O(N);
// Space Complexity: O(N);