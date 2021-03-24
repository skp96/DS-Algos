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

def max_sub_array_of_size_k_brute(k, arr):
  max_sum = 0

  for i in range(len(arr) - k + 1):
    total = 0
    for j in range(i, i + k ):
      total += arr[j]
    max_sum = max(max_sum, total)
  return max_sum

# Time Complexity: O(N * K), where N is the total number of elements in the array
# Space Complexity: O(1)

def max_sub_array_of_size_k_optimized(k, arr):
  max_sum = 0
  window_start = 0
  window_sum = 0
  for window_end in range(len(arr)):
    window_sum += arr[window_end]
    if window_end >= k - 1:
      max_sum = max(max_sum, window_sum)
      window_sum -= arr[window_start]
      window_start += 1
  return max_sum

# Time Complexity: O(N)
# Space Complexity: O(1)