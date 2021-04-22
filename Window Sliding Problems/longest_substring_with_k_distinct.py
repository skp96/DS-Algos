"""
- Problem: Given a string, find the length of the longest substring with no more than K distinct characters.
- Examples:
  - Input: String="araaci", K=2
  - Output: 4
  - Explanation: The longest substring with no more than '2' distinct characters is "araa".
  - Input: String="cbbebi", K=3
  - Output: 5
  - Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
"""
from collections import defaultdict
def longest_substring_w_k_distinct_brute(str, k):
  def is_distinct(start, end):
    freq = defaultdict(lambda: 0)

    for i in range(start, end + 1):
      char = str[i]
      freq[char] += 1
    
    return len(freq) <= k 
  
  longest_substring = 0

  for idx1 in range(len(str)):
    for idx2 in range(idx1, len(str)):
      if is_distinct(idx1, idx2):
        longest_substring = max(longest_substring, idx2 - idx1 + 1)
  
  return longest_substring

# Time Complexity: O(N^3)
# Space Complexity: O(N)

def longest_substring_w_k_distinct_opt_1(str, k):
  longest_substring = 0

  for i in range(len(str)):
    unique_chars = set()
    for j in range(i, len(str)):
      char = str[j]
      if char not in unique_chars:
        unique_chars.add(char)
        if len(unique_chars) > k:
          unique_chars = set()
          break
      longest_substring = max(longest_substring, j - i + 1)

  return longest_substring

# Time Complexity: O(N^2)
# Space Complexity: O(N)

from collections import defaultdict
def longest_substring_w_k_distinct_opt_2(str, k):
  window_start, longest_substring = 0
  unique_freq = defaultdict(lambda: 0)

  for window_end in range(len(str)):
    char = str[window_end]
    unique_freq[char] += 1

    while len(unique_freq) > k:
      char = str[window_start]
      unique_freq[char] -= 1
      if unique_freq[char] == 0:
        del unique_freq[char]
      window_start += 1
    
    longest_substring = max(longest_substring, window_end - window_start + 1)
  
  return longest_substring

  # Time Complexity: O(N)
  # Space Complexity: O(K), where K is the number of distinct characters, technically storing K + 1