/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new aarray of the saame lenght with the squares of the original integers also sorted in ascending order

Sample Input:
array = [1,2,3,5,6,8,9];

Sample Output:
[1,4,9,25,36,64,81]
*/

const sortedSquareArrayNaive = (array) => {
  const sortedSquares = new Array(array.length)

  for(let i = 0; i < array.length; i++) {
    //Square nums from array and store in respective positions in sortedSquares array
    sortedSquares[i] = array[i] ** 2
  }

  //sort sortedSquares and return output
  sortedSquares.sort((a,b) => a - b);

  return sortedSquares;
}

// Time Complexity: O(NlogN);
// Space Complexity: O(N);

const sortedSquareArrayOptimized = (array) => {
  const sortedSquares = new Array(array.length);
  // since the input array is sorted, we can place the largest squared value in the highest position
  let highestSquareIdx = array.length - 1;

  let left = 0;
  let right = array.length - 1

  while (left <= right) {
    const sqr1 = array[left] ** 2
    const sqr2 = array[right] ** 2

    if (sqr1 > sqr2) { // sqr1 > sqr2, place sqr1 at sortedSquares[highestSquareIdx]
      sortedSquares[highestSquareIdx] = sqr1;
      // since sqr1 is placed in its correct position, move left pointer
      left += 1
    } else {
      sortedSquares[highestSquareIdx] = sqr2;

      //since sqr2 is placed in its correct position, move right pointer
      right -= 1
    }
    // either sqr1 or sqr2 will be placed in its correct location, move to postion where the next largest square should be placed
    highestSquareIdx -= 1
  }
  return sortedSquares;
}

// Time Complexity: O(N);
// Space Complexity: O(N);