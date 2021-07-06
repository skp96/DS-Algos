const findPermutations = (nums) => {
  const result = [];
  const permutations = [ [] ];

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    //Take all exisiting permutations and add the current number to create new permutations
    const n = permutations.length;

    for (let p = 0; p < n; p++) {
      const oldPermutation = permutations.shift();

      // Create a new permutation by adding the current number to every position

      for (let j = 0; j < oldPermutation.length + 1; j++) {
        //Clone the permutation
        const newPermutation = oldPermutation.slice(0)
        newPermutation.splice(j, 0, currNum);

        if(newPermutation.length === nums.length) {
          result.push(newPermutation)
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }
  return result
}

// Time Complexity: O(N * N!), we are iterating through all of the permutations with the help of the two for loops. In each iteration, we go through all the current permutation to insert the new number. To insert a number into a permutation of size "N" will take O(N), which makes the overall complexity O(N * N!)

// Space Complexity: O(N * N!), all the additional space is for the result list and the queue to store the intermediate permutations. At any time, we don't have more than N! permutations between the result list and the queue. Therefore, the overall space complexity to store N! permuations each containing N elements will be O( N * N!)