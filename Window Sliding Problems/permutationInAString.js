/*
  - Problem: Given a string and a pattern, find out if the string contains any permutation of the pattern.
  - Permutation is the re-arranging of the characters of a string 
  - Input: String="oidbcaf", Pattern="abc"
  - Output: true
  - Explanation: The string contains "bca" which is a permutation of the given pattern.
*/


const permutationInString = (str, pattern) => {
  let windowStart = 0, match = 0, patternFreq = {}

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    if (!(char in patternFreq)) {
      patternFreq[char]
    }
    patternFreq[char] += 1
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (rightChar in patternFreq) {
      patternFreq[rightChar] -= 1
      if (patternFreq[rightChar] === 0) {
        match += 1
      }
    }
    if (match === Object.keys(patternFreq).length) {
      return true
    }

    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart]
      windowStart += 1
      if (leftChar in patternFreq) {
        if (patternFreq[leftChar] === 0) {
          match -= 1
        }
        patternFreq[leftChar] += 1
      }
    }
  }
  return false
}

// Time Complexity: O(N + M), where N is the number of characters in the string and M is the number of characters in the pattern
// Space Complexity: O(M), where M is the number of distinct characters found in the pattern