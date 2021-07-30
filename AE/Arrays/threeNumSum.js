/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two dimensional array of all triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array

Sample Input: 
array = [12,3,12,-6,5,-8,6];
targetSum = 0

Sample Output:
[[-8,2,6], [-8,3,5], [-6,1,5]]
*/


const threeNumSum = (array, targetSum) => {
  if (array.length < 3) return [];

  //since order matters, sort array
  array.sort((a,b) => a - b)
  const triplets = [];

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left += 1;
        right -=1;
      } else if (sum < targetSum) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return triplets;
}

// Time Complexity: O(N^2);
// Space Complexity: O(N);