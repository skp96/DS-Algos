/*
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (e.g it should mutate the input array), and doesn't need to maintain the order of the other integers

Sample Input:
array = [2,1,2,2,2,3,4,2]
toMove = 2

Sample Output:
array = [1,3,4,2,2,2,2,2]

Input: array
Output: array

edge cases: empty array

Brute Force: 
  - Scan array for toMove value, and if found, scan the remaining array for a non-toMove value 
  - swap the two values, and restart initial scan
Time Complexity: O(N^2);
Space Complexity: O(N);

Optimal Solution: 
  - Two pointers: first pointer at index 0 and second pointer at array.length - 1
  - Scan using first pointer in search for toMove value
  - If found, scan using second pointer for a non-toMove value
  - If a non-toMove value is found, swap the two
Time Complexity: O(N);
Space Complexity: O(N);

*/


const moveElementToEndNaive = (array, toMove) => {
  for (let i = 0; i < array.length - 1; i++ ) {
    const value = array[i];

    if (value === toMove) {
      for (let j = i + 1; j < array.length; j++) {
        const potentialSwap = array[j];

        if (potentialSwap !== toMove) {
          [array[i], array[j]] = [array[j], array[i]];
          break
        }
      }
    }
  }
  return array;
}

const moveElementToEndOptimized = (array, toMove) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] === toMove) {
      while (left < right && array[right] === toMove) right -= 1;

      [array[left], array[right]] = [array[right], array[left]];
    }
    left += 1;
  }
  return array;
}

// Time Complexity: O(N); even though there are two nested loops, the array is being traversed such that each element is explored just once
// Space Complexity: O(1);