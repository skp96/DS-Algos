"""
- Problem: Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
- Examples:
  - Input: [2, 1, 5, 1, 3, 2], k=3 
  - Output: 9
  - Explanation: Subarray with maximum sum is [5, 1, 3].
  - Input: [2, 3, 4, 1, 5], k=2 
  - Output: 7
  - Explanation: Subarray with maximum sum is [3, 4].
"""

def max_sum_subarray_brute(k, arr):
  max_sum = 0
  for idx1 in range(len(arr)-k+1):
    sum = 0
    for idx2 in range(idx1, idx1+k):
      sum += arr[idx2]
    
    max_sum = max(max_sum, sum)
  
  return max_sum

# Time Complexity: O(N*K), where N is the number of elements in the array and K is the next number of elements explored for every element
# Space Complexity: O(1)

def max_sum_subarray_opt(k, arr):
  max_sum, window_sum = 0
  window_start = 0

  for window_end in range(len(arr)):
    window_sum += arr[window_end]

    if window_end >= k:
      window_sum -= arr[window_start]
      window_start += 1
    
    max_sum = max(max_sum, window_sum)
  
  return max_sum

# Time Complexity: O(N)
# Space Complexity: O(1)
