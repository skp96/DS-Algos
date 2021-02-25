"""
- input:
  - two non-empty arrays of integers
  - integers can be positive and negative
- output:
  - return a boolean, which determines if the second array is a subsequence of the first array
- notes:
  - what is a subsequence? --> set of #s that aren't adjacent in the array, but are in the same order as they appear in the array
  - Example: arr1 = [1,2,3,4] and arr2 = [1,3,4] the return value would be True because arr2 is a subsequence of arr1
- Logic
  - iterate through array1 and initialize a pointer to keep track of position in array2
  - for each iteration, check if num1 == num2, if so increment pointer of array2 by 1
  - after incrementing, check if pointer == len(sequence), if so return True because array2 is a subsequence of array1
  - at the end return False, because pointer != len(sequence), so array2 cannot be a subsequence of array1
"""


def validate_subsequence(array, sequence):
    pointer = 0

    for num in array:
        if num == sequence[pointer]:
            pointer += 1
            if pointer == len(sequence):
                return True

    return False

# Time Complexity: O(n)
# Space Complexity: O(1)
