const searchTriplets = (arr) => {
  arr.sort((a,b) => a - b);
  const uniqueTriplets = [];
  console.log(arr);

  for (let i = 0; i < arr.length - 2; i++) {
    const num1 = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    //Avoid duplicate numbers to satisfy the problem's requirement for unique triplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    while (left < right) {
      const sum = num1 + arr[left] + arr[right];

      if (sum === 0) {
        uniqueTriplets.push([num1, arr[left], arr[right]])
        left += 1;
        right -= 1;

        // Avoid duplicate numbers to satify the problem's requirement for unique triplets
        while (left < right && arr[left] === arr[left - 1]) left += 1;
        while (left < right && arr[right] === arr[right + 1]) right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return uniqueTriplets;
}

// Time Complexity: O(N^2);
// Space Complexity: O(N);