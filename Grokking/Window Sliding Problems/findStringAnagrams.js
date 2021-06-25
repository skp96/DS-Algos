const findStringAnagrams = (str, pattern) => {
  const patternObj = {};
  let windowStart = 0;
  let match = 0;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in patternObj)) {
      patternObj[char] = 0;
    }
    patternObj[char] += 1;
  }

  const resultIdx = [];
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in patternObj) {
      patternObj[rightChar] -= 1;
      if (patternObj[rightChar] === 0) {
      match += 1;
      }
    }
    if (match === Object.keys(patternObj).length) {
      resultIdx.push(windowStart);
    }

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart];
      if (leftChar in patternObj) {
        if (patternObj[leftChar] === 0) {
        match -= 1;
        }
        patternObj[leftChar] += 1;
      }
      windowStart++;
    }
  }
  return resultIdx;
}

// Time Complexity: O(N)
// Space Complexity: O(P)