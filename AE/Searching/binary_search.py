"""
- Logic for second approach:
  - similar logic to solving the two_sum problem
  - the array is already sorted, we can utilze two pointers to determine the middle point and element in the array
  - so while the left pointer is less than or equal to right pointer: linear iteration
    - we get the mid index and value by adding the left pointer position to the right pointer position and dividing by 2 (e.g. midrange)
    - if target == mid value: return mid index
    - else if target < mid value: we want to move our right pointer to the index position one less than our mid index
    - else the target > mid value: we want to move our left pointer to the index position one greater than mid index
  - return -1
"""


def binary_search(array, target):
    if not len(array):
        return -1

    mid_idx = len(array) // 2
    mid_value = array[mid_idx]

    if target == mid_value:
        return mid_idx
    elif target < mid_value:
        return binary_search(array[0:mid_idx], target)
    elif target > mid_value:
        search_result = binary_search(array[mid_idx + 1:], target)
        return -1 if search_result == -1 else mid_idx + search_result + 1

# Time Complexity: O(log(n))
# Space Complexity: O(n)


def binary_search_optimized(array, target):
    left = 0
    right = len(array) - 1

    while left <= right:
        mid_idx = (left + right) // 2
        mid_value = array[mid_idx]

        if target == mid_value:
            return mid_idx
        elif target < mid_value:
            right = mid_idx - 1
        else:
            left = mid_idx + 1

    return -1

# Time Complexity: O(log(n))
# Space Complexity: O(1)
