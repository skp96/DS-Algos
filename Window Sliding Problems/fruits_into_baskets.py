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

def fruits_into_basket_brute(fruits):
  def is_legit(start, end):
    unique_tracker = set()

    for start in range(start, end + 1):
      fruit = fruits[start]
      if fruit not in unique_tracker:
        unique_tracker.add(fruit)
        if len(unique_tracker) > 2:
          return False
    return True

  max_fruits = 0

  for i in range(len(fruits)):
    for j in range(i, len(fruits)):
      if is_legit(i, j):
        max_fruits = max(max_fruits, j - i + 1)
  
  return max_fruits

# Time Complexity: O(N^3)
# Space Complexity: O(1)

from collections import defaultdict
def fruits_into_basket_optimized(fruits):
  max_fruits = 0
  window_start = 0
  fruit_freq = defaultdict(lambda: 0)

  for window_end in range(len(fruits)):
    fruit = fruits[window_end]
    if fruit not in fruit_freq:
      fruit_freq[fruit] += 1
    
    while len(fruit_freq) > 2:
      fruit = fruits[window_start]
      fruit_freq[fruit] -= 1
      if fruit_freq[fruit] == 0:
        del fruit_freq[fruit]
      window_start += 1
    
    max_fruits = max(max_fruits, window_end - window_start + 1)
  
  return max_fruits
