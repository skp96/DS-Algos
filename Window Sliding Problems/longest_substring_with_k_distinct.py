"""
- Problem: Given a string, find the length of the longest substring in it with no more than K distinct characters.
- Examples:
  - Input: String="araaci", K=2
  - Output: 4
  - Explanation: The longest substring with no more than '2' distinct characters is "araa".
  - Input: String="cbbebi", K=3
  - Output: 5
  - Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
"""

def longest_substring_w_k_distinct_brute(str, k):
  longest_length = 0

  for i in range(len(str)):
    unique_chars = set()
    for j in range(i, len(str)):
      char = str[j]
      if char not in unique_chars:
        unique_chars.add(char)
        if len(unique_chars) > k:
          unique_chars = set()
          break
      longest_length = max(longest_length, j - i + 1)
  
  return longest_length

# Time Complexity: O(N * K), where N is the total number of elements in the array
# Space Complexity: O(K), will be storing a max of K+1 characters in the set

def longest_substring_w_k_distinct_optimized(str, k):
  unique_freq_chars = {}
  window_start = 0
  longest_length = 0

  for window_end in range(len(str)):
    char = str[window_end]
    if char not in unique_freq_chars:
      unique_freq_chars[char] = 0
    unique_freq_chars[char] += 1
    
    while len(unique_freq_chars) > k:
      left_char = str[window_start]
      unique_freq_chars[left_char] -= 1
      if unique_freq_chars[left_char] == 0:
        del unique_freq_chars[left_char]
      window_start += 1

    longest_length = max(longest_length, window_end - window_start + 1)
  
  return longest_length

# Time Complexity: O(N),the outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)
# Space Complexity: O(K), will be storing a max of K+1 characters in the dictionary


