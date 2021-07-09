const mergeOverlappingIntervals = (array) => {
  if (array.length <= 1) return [];

  array.sort((a,b) => a[0] - b[0]);
  const result = [];

  let [start, end] = array[0];

  for (let i = 1; i < array.length; i++) {
    let [currStart, currEnd ] = array[i];

    if (currStart <= end) {
      end = Math.max(end, currEnd);
    } else {
      result.push([start, end]);
      start = currStart;
      end = currEnd;
    }
  }
  result.push([start, end]);
  return result;
}

// Time Complexity: O(NlogN);
// Space Complexity: O(N);