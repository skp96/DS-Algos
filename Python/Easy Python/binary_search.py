def binarySearchRecur(array, target):
    if not len(array):
        return -1

    midIdx = int(len(array) / 2)
    midValue = array[midIdx]

    if target < midValue:
        return binarySearchRecur(array[0:midIdx], target)
    elif target > midValue:
        searchResult = binarySearchRecur(array[midIdx + 1:], target)
        return -1 if searchResult == -1 else midIdx + searchResult + 1
    else:
        return midIdx

# Time Complexity: O(log(n))
# Space Complexity: O(n)


def binarySearchIter(array, target):
    return binarySearchIterHelper(array, target, left=0, right=len(array) - 1)


def binarySearchIterHelper(array, target, left, right):
    while left <= right:
        midIdx = (left + right) / 2
        midValue = array[midIdx]

        if target == midValue:
            return midIdx
        elif target < midValue:
            right = midIdx - 1
        else:
            left = midIdx + 1
    return -1

# Time Complexity: O(n)
# Space Complexity: O(1)
