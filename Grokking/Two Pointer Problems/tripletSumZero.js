const searchTriplets = (arr) => {
    arr.sort((a,b) => a - b);
  const triplets = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    let left = i + 1; 
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left += 1;
        right -= 1;

        while (left < right && arr[left] === arr[left - 1]) {
          left += 1;
        }

        while (left < right && arr[right] === arr[right + 1]) {
          right -=1;
        }
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }

  }
  return triplets;
}

// Time Complexity: O(N^2);
// Space Complexity: O(N);