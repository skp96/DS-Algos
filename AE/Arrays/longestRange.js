const longestRangeBrute = (array) => {
  if (array.length === 0) return [-1, -1];

  array.sort((a, b) => a - b);

  let windowStart = 0;
  let longestRange = -Infinity;
  let values = [];

  for (let windowEnd = 1; windowEnd < array.length; windowEnd++) {
    if (array[windowEnd] !== array[windowEnd - 1]) {
      if (array[windowEnd] === array[windowEnd - 1] + 1) {
        if (windowEnd - windowStart + 1 > longestRange) {
          longestRange = windowEnd - windowStart + 1;
          values = [array[windowStart], array[windowEnd]];
        }
      } else {
        windowStart = windowEnd;
      }
    }
  }
  return values;
};

// Time Complexity: O(NlogN);
// Space Complexity: O(1) or O(N)

const longestRangeOptimized = (array) => {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};

  // store all numbers in hash and mark true, which means unvisited
  for (const num of array) {
    nums[num] = true;
  }

  for (const num of array) {
    if (!nums[num]) continue; //already visited, so ignore
    nums[num] = false //set flag to visited 

    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;

    while (left in nums) { // as long as num to left is in the hash
      nums[left] = false //set flag to visited
      currentLength += 1;
      left -= 1;
    }

    while (right in nums) { // as long as num to right is in the hash
      nums[right] = false; // set flag to visited 
      currentLength += 1;
      right += 1;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}

// Time Complexity: O(N);
// Space Complexity: O(N);