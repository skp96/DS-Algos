const findMissingNumber = (nums) => {
    let i = 0
  while (i < nums.length) {
    const idxJ = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[idxJ]) {
      [nums[i], nums[idxJ]] = [nums[idxJ], nums[i]]
    } else {
      i+= 1
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums
};

// Time Complexity: O(N)
// Space Complexity: O(1)