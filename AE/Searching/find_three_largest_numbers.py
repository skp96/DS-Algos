"""
- input: an array of at least three integers
- output: without sorting the input array, return a sorted array containing the three largest integers from the input array
- notes:
  - the function should return duplicate ints if necessary
- logic:
  - init an array called three largest of three None default values
  - iterate through input array
    - if the num is > value at three_largest[2] or three_largest[2] is None:
      - need to iterate through three_largest array and update values
    - if the num is > value at three_largest[1] or three_largest[1] is None:
      - need to iterate through three_largest array and update values
    - if num is > value at three_largest[0] or three_largest[0] is None:
      - need to iterate through three_largest array and update values
  - return three_largest
  * logic for updating the three_largest array:
    - when adding a new number, we need to shift all previous numbers back by one space
    - iterate through three_largest array using idx
      - if idx == position where new number is being placed:
        - place the number --> three_largest[idx] = new_num
      - else we are moving numbers back a space:
        - three_largest[idx] = three_largest[idx + 1]
"""


def find_three_largest_numbers(array):
    three_largest_numbers = [None, None, None]

    for num in array:
        if three_largest_numbers[2] is None or num >= three_largest_numbers[2]:
            update_three_largest_nums(three_largest_numbers, num, 2)
        elif three_largest_numbers[1] is None or num >= three_largest_numbers[1]:
            update_three_largest_nums(three_largest_numbers, num, 1)
        elif three_largest_numbers[0] is None or num >= three_largest_numbers[0]:
            update_three_largest_nums(three_largest_numbers, num, 0)

    return three_largest_numbers


def update_three_largest_nums(three_largest_numbers, number, position):
    for idx in range(position + 1):
        if idx == position:
            three_largest_numbers[idx] = number
        else:
            three_largest_numbers[idx] = three_largest_numbers[idx + 1]

    return three_largest_numbers

# Time Complexity: O(n * 3) --> O(n)
# Space Complexity: O(1)
