/*
  - Problem: Given a string and a pattern, find all anagrams of the pattern in the given string. Return a list of starting indices of the anagrams of the pattern in the given string.
  - Input: String="abbcabc", Pattern="abc"
  - Output: [2, 3, 4]
  - Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
*/

const findStringAnagram = (str, pattern) => {
  const result = []
  const patternFreq = {}
  let windowStart = 0, match = 0

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    if (!(char in patternFreq)) {
      patternFreq[char] = 0
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
      result.push(windowStart)
    }

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart]
      windowStart += 1
      if (leftChar in patternFreq) {
        if (patternFreq[leftChar] === 0) {
          match -= 1
        }
        patternFreq[leftChar] += 1
      }
    }
  }
  return result
}

// Time Complexity: O(N + M), where N is the number of characters in the string and M is the number of characters in the pattern
// Space Complexity: O(M), where M is the number of distinct characters in the pattern
