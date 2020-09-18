def binarySearch(array, target):
    if not len(array):
        return -1

    midIdx = int(len(array) / 2)
    midValue = array[midIdx]

    if target < midValue:
        return binarySearch(array[0:midIdx], target)
    elif target > midValue:
        searchResult = binarySearch(array[midIdx + 1:], target)
        return -1 if searchResult == -1 else midIdx + searchResult + 1
    else:
        return midIdx

# Time Complexity: O(log(n))
# Space Complexity: O(n)
