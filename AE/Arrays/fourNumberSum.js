const fourNumberSum = (array, targetSum) => {
  array.sort((a,b) => a - b);
  const quads = [];

  for (let i = 0; i < array.length - 3; i++) {
    const num1 = array[i];

    for (let j = i + 1; j < array.length - 2; j++) {
      const num2 = array[j];
      const remainingSum = targetSum - num1 - num2;

      let left = j + 1;
      let right = array.length - 1;

      while (left < right) {
        const sum = array[left] + array[right];
        if (sum === remainingSum) {
          quads.push([num1, num2, array[left], array[right]]);
          left += 1;
          right -= 1;
        } else if (sum < remainingSum) {
          left += 1;
        } else {
          right -=1;
        }
      }
    }
  }
  return quads;
}

// Time Complexity: O(NlogN + N^3) => O(N^3);
// Space Complexity: O(N);