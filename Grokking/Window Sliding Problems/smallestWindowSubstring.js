const findSmallestSubstring = (str, pattern) => {
  const patternFreq = {};
  let windowStart = 0; 
  let matched = 0;
  let smallest = {start: 0, end: 0};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in patternFreq)) {
      patternFreq[char] = 0;
    }
    patternFreq[char] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in patternFreq) {
      patternFreq[rightChar] -= 1;
      if (patternFreq[rightChar] === 0) {
        matched += 1;
      }
    }

    while (matched === Object.keys(patternFreq).length) {
      smallest = {start: windowStart, end: windowEnd};
      const leftChar = str[windowStart];
      if (leftChar in patternFreq) {
        if (patternFreq[leftChar] === 0) {
          matched -= 1;
        }
        patternFreq[leftChar] += 1;
      }
      windowStart += 1;
    }
  }
  const {start, end} = smallest;
  if (start === 0 && end === 0) return '';
  return str.slice(start, end + 1);
}

// Time Complexity: O(N);
// Space Complexity: O(P);