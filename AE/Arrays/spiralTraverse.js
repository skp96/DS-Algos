/*
Write a function that takes in an nXm two-dimensional array (that can be square-shaped when n == m and returns a one-dimensional array of all the array's elements in spiral order)

Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in the spiral pattern all the way until every element has been visited

Sample Input:
array = [
  [1, 2, 3, 4],
  [12,13,14,5],
  [11,16,15,6],
  [10, 9, 8,7]
]

Sample Output:
array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
*/


const spiralTraverse = (array) => {
  const result = [];

  let startRow = 0;
  let endRow = array.length - 1;

  let startCol = 0;
  let endCol = array[0].length - 1

  while (startCol <= endCol && startRow <= endRow) {
    // traverse across
    for (let col = startCol; col < endCol; col++) {
      const num = array[startRow][col]
      result.push(num);
    }
    // traverse down
    for (let row = startRow; row <= endRow; row++) {
      const num = array[row][endCol];
      result.push(num)
    }

    // Check to prevent from adding elements already visited
    if (startCol < endCol && startRow < endRow) {
      for (let col = endCol - 1; col >= startCol; col--) {
        const num = array[endRow][col]
        result.push(num);
      }

      for (let row = endRow - 1; row > startRow; row--) {
        const num = array[row][startCol];
        result.push(num);
      }
    }
    startCol += 1;
    startRow += 1;

    endCol -= 1;
    endRow -= 1;
  }
  return result;
}

// Time Complexity: O(N), where N is the total number of elements in the input matrix
// Space Complexity: O(N), where N is the total number of elements stored in the output array