/*
  Problem: Given an array of intergers, return the indices of the two numbers that add up to a given target
  - Initial Strategy:
    - Handle edge case of receiving inputs of size less than 2 --> return null;
    - init a for loop p1 in order to test all possible combos for p1Num
      - since looking for two nums that sum to target, we're searching for target - p1Num
      - init a for loop p2 to generate all possible combos for p1Num
        - if p2Num === target - p1Num; return [p1, p2]
    - return null
*/

const findTwoSum = (nums, target) => {
  if (nums.length < 2) return null;

  for (let p1 = 0; p1 < nums.length - 1; p1++) {
    const numToFind = target - nums[p1];

    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p2] === numToFind) return [p1, p2];
    }
  }
  return null;
}

// Time Complexity: O(N^2), since we are evaluating all possible combinations for each number in the input array
// Space Complexity: O(1)

const findTwoSumOptimal = (nums, target) => {
  const numsToFind = {};

  for (let p1 = 0; p1 < nums.length; p1++) {
    if (nums[p1] in numsToFind) {
      return [numsToFind[nums[p1]], p1]
    } 

    const numToFind = target - nums[p1];
    numsToFind[numToFind] = p1
  }
  return null
}

// Time Complexity: O(N), where N represents the number of integers within our input array
// Space Complexity: O(N), where in the worst case scenario, we don't have a valid solution and therefore store key/value pairs in our hash map and end up with a size equivalent to the size of the input array
