/*
  - Problem: Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement
  - Input: String="aabccbb", k=2
  - Output: 5
  - Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
  - Input: String="abccde", k=1
  - Output: 3
  - Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

const lengthOfLongestSubstringBrute = (str, k) => {
  const isReplaceable = (start, end) => {
    const freq = {}
    let maxRepeateCharCount = 0

    for (let i = start; i <= end; i++) {
      let char = str[i]
      if (freq[char] === undefined) {
        freq[char] = 1
        maxRepeateCharCount = Math.max(maxRepeateCharCount, freq[char])
      } else {
        freq[char] += 1
        maxRepeateCharCount = Math.max(maxRepeateCharCount, freq[char])
      }
    }
    if (end - start + 1 - maxRepeateCharCount > k ) {
      return false
    }
    return true
  }

  longest = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (isReplaceable(i, j)){
        longest = Math.max(longest, j - i + 1)
      }
    }
  }
  return longest
}

// Time Complexity: O(N^3)
// Space Complexity: O(N)

const lengthOfLongestSubstringOpt = (str, k) => {
  let longest = 0
  let windowStart = 0
  let maxRepeateLetterCount = 0
  let freq = {}

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (!(rightChar in freq)) {
      freq[rightChar] = 0
    }
    freq[rightChar] += 1
    maxRepeateLetterCount = Math.max(maxRepeateLetterCount, freq[rightChar])

    if ((windowEnd - windowStart + 1) - maxRepeateLetterCount > k) {
      const leftChar = str[windowStart]
      freq[leftChar] -= 1
      windowStart += 1
    }

    longest = Math.max(longest, windowEnd - windowStart + 1)
  }
  return longest
}

// Time Complexity: O(N), where N is the number of characters in the string
// Space Complexity: O(1), since we're epxecting lower case letters the space complexity would be O(26) which is asymptotically O(1) 