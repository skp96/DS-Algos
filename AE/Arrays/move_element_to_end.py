"""
- input: an array of integers and an integer that represents the element in the array that needs to be moved to the end
- output: an array that has all instances of the integer input moved to the end of the array
- notes: mutatle the input array, do not return a new list
- logic: 
  - going to follow an inverse logic approach; instead of moving the element to the end, going to move elements that are not the input integer to the front
  - in order to do that, we need to keep track of the integers that we need to move to the end, because when we come across an integer that isn't the input integer, we are going to swap the positions, 
  - iterate through the input array using idx:
    - if the num != the integer we need to move, then we know we need to swap:
      - array[idx], array[to_move_pointer] = array[to_move_pointer], array[idx]
      - increment pointer by 1
  - return array
"""


def move_element_to_end(array, toMove):
    to_move_pointer = 0

    for idx in range(len(array)):
        num = array[idx]

        if num != toMove:
            array[idx], array[to_move_pointer] = array[to_move_pointer], array[idx]
            to_move_pointer += 1

    return array

# Time Complexity: O(n)
# Space Complexity: O(1)


def move_element_to_end(array, toMove):
    # two pointers: start of array for values that need to be swapped to the end, and end of array for values that need to be swapped to the front
    i = 0
    j = len(array) - 1

    while i < j:
        # move end pointer to a position where the number needs to be moved to the front
        while i < j and array[j] == toMove:
            j -= 1
        # if we come across a number that needs to be moved, we have already located the position of the number we can swap with
        if array[i] == toMove:
            array[i], array[j] = array[j], array[i]

        i += 1
    return array

# Time Complexity: O(n)
# Space Complexity: O(1)
