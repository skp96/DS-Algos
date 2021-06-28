const removeDuplicates = (arr) => {
  let nextNonDuplicate = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
  }
  return nextNonDuplicate;
};

// Time Complexity: O(N);
// Space Complexity: O(1);