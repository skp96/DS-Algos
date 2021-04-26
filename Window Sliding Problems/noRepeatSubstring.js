/*
- Problem: Given a string, find the length of the longest substring, which has no repeating characters
- Input: String="aabccbb"
- Output: 3
- Explanation: The longest substring without any repeating characters is "abc".
*/

const nonRepeatingSubstringBrute = (str) => {
  const repeateCheck = (start, end) => {
    unique_chars = new Set()

    for (let i = start; i <= end; i++) {
      const char = str[i]
      if (unique_chars.has(char)) {
        return false
      } else {
        unique_chars.add(char)
      }
    }
    return true
  }

  let longest = 0

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (repeateCheck(i, j)) {
        longest = Math.max(longest, j - i + 1)
      }
    }
  }
  return longest
}

// Time Complexity: O(N^3)
// Space Complexity: O(N)


const nonRepeatingSubstringOptimized = (str) => {
  const location = {}
  let windowStart = 0
  let longest = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd]

    if (char in location && location[char] >= windowStart) {
      last_location = location[char]
      windowStart = last_location + 1
      location[char] = windowEnd
    } else {
      location[char] = windowEnd
    }
    

    longest = Math.max(longest, windowEnd - windowStart + 1)
  }
  return longest
}

// Time Complexity: O(N), where N is the total number of characters in the string
// Space Complexity: O(K), where K is the number of distinct characters in the string, but worst case scenario all the characters in the string 
// are distinct therefore the space complexity can be O(N)