const longestSubstringAfterReplacement = (str, k) => {
  const charFreq = {};
  let longestSubString = 0;
  let windowStart = 0;
  let maxRepeat = 0

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];
    if (!(char in charFreq)) {
      charFreq[char] = 0
    }
    charFreq[char]++;
    maxRepeat = Math.max(maxRepeat, charFreq[char]);

    if ((windowEnd - windowStart + 1) - maxRepeat > k) {
      let leftChar = str[windowStart];
      charFreq[leftChar]--
      windowStart++
    }
    longestSubString = Math.max(longestSubString, windowEnd - windowStart + 1);
  }
  return longestSubString;
}

// Time Complexity: O(N);
// Space Complexity: O(1), because the input consists of only lowercase letters --> 26 letters max