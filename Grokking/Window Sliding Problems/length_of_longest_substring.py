"""
- Problem: Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.
- Examples:
  - Input: String="aabccbb", k=2
  - Output: 5
  - Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
  - Input: String="abbcb", k=1
  - Output: 4
  - Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
  - Input: String="abccde", k=1
  - Output: 3
  - Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
"""

from collections import defaultdict
def length_of_longest_substring(str, k):
  max_length, max_repeat_char_count = 0
  freq_counter = defaultdict(lambda: 0)
  window_start = 0

  for window_end in range(len(str)):
    char = str[window_end]
    freq_counter[char] += 1
    max_repeat_char_count = max(max_repeat_char_count, freq_counter[char])

    if (window_end - window_start + 1) - max_repeat_char_count > k:
      left_char = str[window_start]
      freq_counter[left_char] -= 1
      window_start += 1
    
    max_length = max(max_length, window_end - window_start + 1)
  
  return max_length