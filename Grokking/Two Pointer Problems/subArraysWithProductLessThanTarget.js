const Deque = require('./collections/deque'); //http://www.collectionsjs.com

const findSubarrays = (arr, target) => {
  const result = [];
  let windowStart = 0
  let product = 1

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    product *= arr[windowEnd]
    while ((product >= target && windowStart < arr.length)) {
      product /= arr[windowStart]
      windowStart++
    }
    const tempResult = new Deque
    for (let i = windowEnd; i < windowStart - 1; i--) {
      tempResult.unshift(arr[i])
      result.push(tempResult.toArray())
    }
  }
  return result
}

// Time Complexity: O(N^3) --> The main loop managing the sliding window contributes O(N), and creating subarrays takes O(N^2)
// Space Complexity: O(N^3)

console.log(findSubarrays([2, 5, 3, 10], 30));