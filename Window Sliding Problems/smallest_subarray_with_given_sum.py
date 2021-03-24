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

def smallest_subarray_with_given_sum_brute(s, arr):
  smallest_len = float('inf')

  for i in range(arr):
    total = 0
    for j in range(i, len(arr)):
      total += arr[j]
      if total >= s:
        smallest_len = min(smallest_len, j - i + 1)
        total = 0
        break
  
  return smallest_len

  # Time Complexity: O(N * K), where N is the total number of elements in the array
  # Space Complexity: O(1)

  def smallest_subarray_with_given_sum_optimized(s, arr):
    smallest_len = float('inf')
    window_sum, window_start = 0

    for window_end in range(len(arr)):
      window_sum += arr[window_end]
      
      while window_sum >= s:
        smallest_len = min(smallest_len, window_end - window_start + 1)
        window_sum -= arr[window_start]
        window_start += 1
    
    return smallest_len

# Time Complexity: O(N), the outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)
# Space Complexity: O(1)
          
