"""
- input: is a 'special' array (heavily nested array)
- output: return the product sum
- notes:
  - special array is a non-empty array that contains either integers or other 'special' arrays
  - product sum of a special array is the sum of its elements, where 'special' arrays inside are summed themselves and then multipled by their level of depth
- logic:
  - need two variables the sum and the depth; the depth will be passed on from function call to function call
  - we iterate through the 'special' array
    - check if it is a type int
      - add to the sum
    - else the element we are currently on is a 'special' array
      - add to the sum the return value of recursively calling the function passing in the element and the current depth + 1
  - return sum
"""


def product_sum(array):
    sum = 0
    depth = 1
    sum += product_sum_helper(array, depth)
    return sum


def product_sum_helper(array, depth):
    sum = 0

    for ele in array:
        if type(ele) is int:
            sum += ele
        else:
            sum += product_sum_helper(ele, depth + 1)

    return depth * sum


# Time Complexity: O(n), where n is the number of nodes in the element
# Space Complexity: O(d), where d is the greatest depth of the 'special' arrays in the array
