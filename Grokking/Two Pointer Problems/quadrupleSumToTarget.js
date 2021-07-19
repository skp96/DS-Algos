const quadrupleSumToTarget = (arr, target) => {
  arr.sort((a,b) => a - b);

  const quadruplets = [];

  for (let i = 0; i < arr.length - 3; i++) {

    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    };

    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      };

      searchPairs(arr, target, i, j, quadruplets)
    }
  }
  return quadruplets;
}

const searchPairs = (arr, target, first, second, quadruplets) => {
  let left = second + 1;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[first] + arr[second] + arr[left] + arr[right];

    if (sum === target) {
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left += 1;
      right -= 1;

      while (left < right && arr[left] === arr[left - 1]) {
        left += 1;
      }

      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1;
      }
    } else if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

// Time Complexity: O(N^3);
// Space Complexity: O(N)