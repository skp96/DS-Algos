const findSubarrays = (arr, target) => {
  const result = [];
  let windowStart = 0;
  let product = 1;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    product *= arr[windowEnd]

    while (product >= target) {
      product /= arr[windowStart];
      windowStart += 1;
    }

    const subArray = [];

    for (let i = windowEnd; i >= windowStart; i--) {
      subArray.unshift(arr[i]);
      result.push([...subArray]);
    }
  }
  return result;
}

// Time Complexity: O(N^3)
// Space Complexity: O(N^3)