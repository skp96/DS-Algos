"""
- input:
  - two non-empty arrays of integers
- output:
  - return the pair of numbers (one from each array) whose absolute difference is closest to zero 
  - return the pair in an array, with the number from the first array in the first position
- logic:
  - the goal is to efficiently look at the pairs to determine which has the smallest difference
  - we know that the difference between two numbers gets smaller,  as the smaller number gets closer to the larger number
  - therefore, we can sort the two arrays --> numbers are in increasing order so the next number in the array will be greater than the current number
  - have a pointer for both arrays
  - use the pointers to calculate the absolute difference and track the smallest 
  - and then since we have sorted the numbers in ascending order, determine which of the two numbers is smaller and increment its pointer by 1
  - in doing so, we are essentially moving our position to a larger number and that larger number will reduce the difference between the two numbers
"""


def smallest_difference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()
    pair = []
    smallest_diff = float('inf')
    pointer_one = 0
    pointer_two = 0

    while pointer_one < len(arrayOne) and pointer_two < len(arrayTwo):
        num1 = arrayOne[pointer_one]
        num2 = arrayTwo[pointer_two]

        absolute_diff = abs(num1 - num2)

        if absolute_diff < smallest_diff:
            smallest_diff = absolute_diff
            pair = [num1, num2]

        if num1 < num2:
            pointer_one += 1
        else:
            pointer_two += 1

    return pair

# Time Complexity: O(nlogn + mlogm)
# Space Complexity: O(1)
