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