const moveElementToEnd = (array, toMove) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] === toMove) {
      while (left < right && array[right] === toMove) {
        right -= 1
      }
      [array[left], array[right]] = [array[right], array[left]]
    }
    left += 1;
  }
  return array;
}

// Time Complexity: O(N); even though there are two nested loops, the array is being traversed such that each element is explored just once
// Space Complexity: O(1);