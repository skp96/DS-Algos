/*
Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak.

Sample Input:
array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]

Sample Output:
6 --> 0, 10, 6, 5, -1, -3

Strategy:
  - Scan through the array and determine if we have a peak (left num is < curr && right numb < curr)
  - If we have a peak, expand on both left and right sides checking if the subsequent num is less than the previous
  - Longest peak will difference between the two pointers
  - Move pointer to the 'right' pointer

*/


const longestPeak = (array) => {
  let longestPeak = 0;

  let pointer = 1;

  while (pointer < array.length - 1) {
    const isPeak = array[pointer - 1] < array[pointer] && array[pointer + 1] < array[pointer];

    // No peak, keep searching for one
    if (!isPeak) {
      pointer += 1;
      continue;
    }

    // Expand left
    let left = pointer - 2;
    while (left >= 0 && array[left] < array[left + 1]) left -= 1;

    // Expand right
    let right = pointer + 2;
    while (right < array.length && array[right] < array[right - 1]) right += 1;

    longestPeak = Math.max(longestPeak, right - left - 1);
    pointer = right;
  }
  return longestPeak;
}

// Time Complexity: O(N);
// Space Complexity: O(1);