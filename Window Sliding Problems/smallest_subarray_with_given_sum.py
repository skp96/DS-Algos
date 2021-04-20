"""
- Problem: Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
- Examples: 
  - Input: [2, 1, 5, 2, 3, 2], S=7 
  - Output: 2
  - Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
  - Input: [2, 1, 5, 2, 8], S=7 
  - Output: 1
  - Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
"""

def smallest_subarray_w_given_sum_brute(s, arr):
  smallest_len = float('Inf')

  for idx_1 in range(len(arr)):
    sum = 0
    for idx_2 in range(idx_1, len(arr)):
      sum += arr[idx_2]
      
      if sum >= s:
        smallest_len = min(smallest_len, idx_2 - idx_1 + 1)
        break
  
  return smallest_len

# Time Complexity: O(N^2)
# Space Complexity: O(1)

def smallest_subarray_w_given_sum_opt(s, arr):
  window_start, window_sum = 0
  smallest_len = float('Inf')

  for window_end in range(len(arr)):
    window_sum += arr[window_end]

    while window_sum >= s:
      smallest_len = min(smallest_len, window_end - window_start + 1)
      window_sum -= arr[window_start]
      window_start += 1
  
  if smallest_len == float('Inf'):
    return 0 
  
  return smallest_len

# Time Complexity: O(N)
# Space Complexity: O(1)
