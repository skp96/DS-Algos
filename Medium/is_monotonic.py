def isMonotonic(array):
  if len(array) <= 2:
    return True
  
  isIncreasing = True if array[len(array) - 1 > array[0]] else False

  for i in range(len(array) - 1):
    currEle = array[i]
    nextEle = array[i + 1]

    if isIncreasing and currEle > nextEle:
      return False
    elif not isIncreasing and currEle < nextEle:
      return False

  return True


# Time Complexity: O(n)
# Space Complexity: O(1)