const findSubarrays = (arr, target) => {
  const result = [];
  let left = 0;
  let product = 1;

  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];

    while(product >= target) {
      product /= arr[left];
      left += 1;
    }

    const subArray = [];

    for (let i = right; i >= left; i--) {
      subArray.push(arr[i]);
      result.push([...subArray]);
    }
  }
  return result
}

// Time Complexity: O(N^3)
// Space Complexity: O(N^3)