"""
- input: non-empty array of distinct integers, and an integer representing a target sum
- output: return a two-dimensional array of all possible triplets that sum to the target value
- note:
  - the numbers in each triplet should be ordered in ASCENDING order
  - and the triplets themselves should be ordered in ascending order with respect to the numbers they hold
- logic:
  - since the numbers in the triplet should be ordered in ascending order, and the triplets themselves should be ordered, sort the input array
  - init a result array to store triplets
  - iterate through input array
    - init a left pointer: idx + 1
    - init a right pointer: len(array) - 1
    - take the sum of the three values and check if value == target sum:
      if so append to triplets array [val1, val2, val3]
    - elif sum > target:
      -decrement right pointer by 1
    - else the sum < target:
      - increment left pointer by 1
  - return triplets array
"""


def three_number_sum(array, target_sum):
    target_sum.sort()
    triplets = []

    for idx in range(len(array) - 2):
        left = idx + 1
        right = len(array) - 1

        while left < right:
            sum = array[idx] + array[left] + array[right]

            if sum == target_sum:
                triplets.append([array[idx], array[left], array[right]])
                left += 1
                right -= 1
            elif sum < target_sum:
                left += 1
            else:
                right -= 1

    return triplets

# Time Complexity: O(n^2)
# Space Complexity: O(n)
