/*
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing

Note that empty arrays and arrays of one element are monotonic

Sample Input:
array = [-1,-5,-10,-1100,-1100,-1101,-1102,-9001]

Sample Output:
true

edge cases: empty array, array of one element

Strategy:
  - deteremine if array is increasing or decreasing by checking first and last elements in the array
  - scan through array comparing current element to previous element:
    - If increasing, check if current element < previous element, return false
    - Else if decreasing, check if current > previous element, return false
  - return true

*/


const isMonotonic = (array) => {
  if (array.length < 2) return true;

  const isIncreasing = array[0] < array[array.length - 1];

  for (let i = 1; i < array.length; i++) {
    const currEle = array[i];
    const prevEle = array[i - 1];

    if (isIncreasing) {
      if (currEle < prevEle) return false;
    } else {
      if (currEle > prevEle) return false;
    }
  }
  return true;
}

// Time Complexity: O(N);
// Space Complexity: O(1);