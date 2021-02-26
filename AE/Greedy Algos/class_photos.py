"""
- input: 
  - two input arrays: 
    - one containing the heights of all students with red shirts
    - the other containing the heights of all students with blue shirts
  - output:
    - return a boolean indicating whether or not a class photo can be taken
  - notes:
    - both arrays have the same length and each height is a positive int
  - Logic:
    - taller folks in the back and shorter folks in the front, so sort both lits and do the following:
      - compare last two elements from both lists to determine back_grow
    - iterate through any one list
      - if back_row == 'BLUE' and blue[i] < red[i]: return false
      - elif red[i] < blue[i] return false
    - return true
"""


def classPhoto(red_shirt_heights, blue_shirt_heights):
    red_shirt_heights.sort()
    blue_shirt_heights.sort()

    back_row = 'BLUE' if blue_shirt_heights[-1] > red_shirt_heights[-1] else 'RED'

    for idx in range(len(blue_shirt_heights)):
        if back_row == 'BLUE' and blue_shirt_heights[idx] <= red_shirt_heights[idx]:
            return False
        elif back_row == 'RED' and red_shirt_heights[idx] <= blue_shirt_heights[idx]:
            return False

    return True

# Time Complexity: O(nlogn + nlogn + n) --> O(nlogn)
# Space Complexity: O(1)
