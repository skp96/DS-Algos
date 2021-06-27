const sortedSquareArrayBrute = (array) => {
  const result = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    const num = array[i] ** 2;
    result[i] = num
  }
  result.sort((a, b) => a - b);
  return result;
}

// Time Complexity: O(NlogN);
// Space Complexity: O(N);

const sortedSquareArrayOptimized = (array) => {
  const result = new Array(array.length);
  let highestIdx = array.length - 1;

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const num1 = array[left] ** 2;
    const num2 = array[right] ** 2;

    if (num1 < num2) {
      result[highestIdx] = num2;
      highestIdx -= 1;
      right -= 1;
    } else {
      result[highestIdx] = num1;
      highestIdx -= 1
      left += 1;
    }
  }
  return result;
}

// Time Complexity: O(N);
// Space Complexity: O(N);