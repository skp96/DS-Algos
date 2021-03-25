"""
- Problem: Given a string, find the length of the longest substring, which has no repeating characters.
- Example:
  - Input: String="aabccbb"
  - Output: 3
  - Explanation: The longest substring without any repeating characters is "abc".
  - Input: String="abbbb"
  - Output: 2
  - Explanation: The longest substring without any repeating characters is "ab".
  - Input: String="abccde"
  - Output: 3
  - Explanation: Longest substrings without any repeating characters are "abc" & "cde".
"""

from collections import defaultdict
def no_repeat_substring_brute(str):
  def all_unique(start, end):
    unique_char_freq = defaultdict(0)

    for k in range(start, end + 1):
      char = str[k]
      unique_char_freq[char] += 1
      if unique_char_freq[char] > 1:
        return False
    
    return True

  
  longest_length = 0

  for i in range(len(str)):
    for j in range(i, len(str)):
      if all_unique(i, j):
        longest_length = max(longest_length, j - i + 1)

  return longest_length
  
  

# Time Complexity: O(N^3), where N is the total number of characters in the string
# Space Complexity: O(1)

def no_repeat_substring_optimized(str):
  longest_length = 0
  window_start = 0
  visited = {}

  for window_end in range(len(str)):
    char = str[window_end]

    if char not in visited:
      visited[char] = window_end
    else:
      window_start = visited[char] + 1
      visited[char] = window_end

    longest_length = max(longest_length, window_end - window_start + 1)
  
  return longest_length

# Time Complexity: O(N), where N is the total number of characters in the string
# Space Complexity: O(K), where K is the number of distinct characters in the string, but worst case scenario all the characters in the string 
# are distinct therefore the space complexity can be O(N)
      
