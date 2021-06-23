const noRepeatSubstring = (str) => {
  let longest = 0;
  const charFreq = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];

    if ((char in charFreq) && charFreq[char] >= windowStart) {
      windowStart = charFreq[char] + 1;
    } 
    charFreq[char] = windowEnd

    longest = Math.max(longest, windowEnd - windowStart + 1);
  }
  return longest;
}

// Time Complexity: O(N);
// Space Complexity: O(N);