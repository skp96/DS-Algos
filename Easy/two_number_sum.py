def twoNumberSum(array, targetSum):
    for i in range(len(array) - 1):
        firstNum = array[i]
        for j in range(i + 1, len(array)):
            secondNum = array[j]
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
    return []

# Time Complexity: O(n^2)
# Space Complexity: O(1)


def twoNumberSumOptimized(array, targetSum):
    nums = {}
    for num in array:
        potentialMatch = targetSum - num
        if potentialMatch in nums:
            return [num, potentialMatch]
        else:
            nums[num] = True
    return []

# Time Complexity O(n)
# Space Complexity O(1)


def twoNumberSumOptimizedII(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        if array[left] + array[right] < targetSum:
            left += 1
        elif array[left] + array[right] > targetSum:
            right -= 1
        else:
            return [array[left], array[right]]
    return []

# Time Complexity O(nlogn)
# Space Complexity O(1)
