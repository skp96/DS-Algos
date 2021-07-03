const findAllSubsets = (nums) => {
  const subsets = [ [] ];

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    const n = subsets.length;

    for (let j = 0; j < n; j++) {
      const copySet = subsets[j].slice(0);
      copySet.push(currNum);
      subsets.push(copySet);
    }
  }
  return subsets;
}

// Time Complexity: O(N * 2^N), N is the total number of elements in the input, and since we create new subsets from exisiting ones, we end up creating O(2^N) subsets which take O(2^N) to create
// Space Complexity: O(N * 2^N), since at each step, the number of subsets double as each element is added to all exisiting subsets, the space complexity consumed is O(2^N), and each subset can take up O(N) space