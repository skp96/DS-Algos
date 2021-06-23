const findSubstring = (str, pattern) => {
  let windowStart = 0;
  let freq = {};
  let startSubStr = 0;
  let minLength = str.length + 1
  let match = 0

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    if (!(char in freq)) {
      freq[char] = 0
    }
    freq[char] += 1
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (rightChar in freq) {
      freq[rightChar] -= 1;

      if (freq[rightChar] >= 0) {
        match += 1;
      }
    }

    while (match === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        startSubStr = windowStart;
      }

      let leftChar = str[windowStart];
      if (leftChar in freq) {
        if (freq[leftChar] === 0) {
          match -= 1
        }
        freq[leftChar]++
      }
      windowStart++
    }
  }
  if (minLength > str.length) {
    return ""
  }
  return str.substring(startSubStr, startSubStr + minLength);
}

// Time Complexity: O(M + N), where M and N are the number of characters in the input and pattern respectively
// Space Complexity: O(M + N)
  // M represents the additional space used up by the HashMap, in the worst case scenario the whole pattern can have distinct characters, which will go into the HashMap
  // N represents the additional space used to create the resulting substring, which will happen when the input string is a permutation of the pattern