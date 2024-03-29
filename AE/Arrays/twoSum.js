/*
Wrtie a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an emptry array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum

Sample Input:

array = [3,5,-4,8,11,1,-1,6]
targetSum = 10

SampeOutput: 
[-1, 11]
*/

const twoNumberSumBrute = (array, targetSum) => {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];

      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);

const twoNumberSumOptimized1 = (array, targetSum) => {
    const nums = {};

    for (let i = 0; i < array.length; i++) {
      const num = array[i];

      if (num in nums) {
        return [nums[num], num]
      } 
      const searchingFor = targetSum - num;
      nums[searchingFor] = num;
    }
    return [];
}

// Time Complexity: O(N);
// Space Complexity: O(N);

const twoNumberSumOptimized2 = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const num1 = array[left];
    const num2 = array[right];
    const sum = num1 + num2;

    if (sum === targetSum) {
      return [num1, num2];
    } else if (sum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return [];
}

// Time Complexity: O(NlogN);
// Space Complexity: O(1);