"""
- Problem: Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit. You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.
- Examples:
  - Input: Fruit=['A', 'B', 'C', 'A', 'C']
  - Output: 3
  - Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
  - Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
  - Output: 5
  - Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
"""

def fruits_into_baskets_brute(fruits):
  def less_than_two(start, end):
    unique_fruits = set()

    for i in range(start, end+1):
      fruit = fruits[i]
      unique_fruits.add(fruit)

      if len(unique_fruits) > 2:
        return False
    
    return True

  max_num_fruits = 0

  for i in range(len(fruits)):
    for j in range(i, len(fruits)):
      if less_than_two(i, j):
        max_num_fruits = max(max_num_fruits, j - i + 1)
  
  return max_num_fruits

# Time Complexity: O(N^3)
# Space Complexity: O(N)

from collections import defaultdict
def fruits_into_baskets_opt(fruits):
  window_start = 0
  max_num_fruits = 0
  unique_freq = defaultdict(lambda: 0)

  for window_end in range(len(fruits)):
    fruit = fruits[window_end]
    unique_freq[fruit] += 1

    while len(unique_freq) > 2:
      left_fruit = fruits[window_start]
      unique_freq[left_fruit] -= 1
      if unique_freq[left_fruit] == 0:
        del unique_freq[left_fruit]
      window_start += 1
    
    max_num_fruits = max(max_num_fruits, window_end - window_start + 1)
  
  return max_num_fruits

# Time Complexity: O(N)
# Space Complexity: O(1)

