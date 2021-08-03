/*
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10 , and the absolute difference of -5 and -4 is 1

Sample Input:
arrayOne = [-1,5,10,20,28,3]
arrayTwo = [26,134,135,15,17]

Sample Output:
[28,26]
*/


const smallestDifferenceNaive = (arrayOne, arrayTwo) => {
  let smallestDiff = Infinity;
  let result = [];

  for (let i = 0; i < arrayOne.length; i++) {
    const num1 = arrayOne[i];
    for (let j = 0; j < arrayTwo.length; j++) {
      const num2 = arrayTwo[j];

      const absDiff = Math.abs(num1 - num2);

      if (absDiff < smallestDiff) {
        smallestDiff = absDiff;
        result = [num1, num2];
      }
    }
  }
  return result;
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);

const smallestDifferenceOptimized = (arrayOne, arrayTwo) => {
  let smallestDiff = Infinity;
  let result = [];

  // by sorting the search for the smallest difference begins with the smallest elements from both the respective inputs
  // and unnecessary operations can be avoided
  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    const num1 = arrayOne[idx1];
    const num2 = arrayTwo[idx2];

    const absDiff = Math.abs(num1 - num2);
    if (absDiff < smallestDiff) {
      smallestDiff = absDiff;
      result = [num1, num2];
    }

    // searching for the smalelst difference, so close the gap by moving the pointer of the smaller number
    if (num1 < num2) {
      idx1 += 1
    } else {
      idx2 += 1;
    }
  }
  return result;
}

// Time Complexitty: O(NlogN + MlogM);
// Space Complexity: O(1);