const findSubsets = (nums) => {
  nums.sort((a,b) => a - b);
  const subSets = [ [] ];
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    startIdx = 0
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIdx = endIdx + 1;
    }
    endIdx = subSets.length - 1;

    for (let j = startIdx; j < endIdx + 1; j++) {
      const set1 = subSets[j].slice(0);
      set1.push(nums[i]);
      subSets.push(set1);
    }
  }
  return subSets;
}

// Time Complexity: O(N * 2^N), in each step, the number of subsets doubles (if not duplicate) as we add each element to all the existing subsets, therefore, we will have a total of O(2^N) subsets, where ‘N’ is the total number of elements in the input set. And since we construct a new subset from an existing set, therefore, the time complexity of the above algorithm will be O(N*2^N).

// Space Complexity: O(O * 2^N), since, at most, we have a total of O(2^N) subsets, and each subset can take up to O(N) space, the space complexity of the algorithm will be O(N * 2N)