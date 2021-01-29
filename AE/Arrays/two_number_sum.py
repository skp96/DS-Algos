# Easy Problem

def twoNumberSum(array, targetSum):
    for i in range(len(array) - 1):
        num1 = array[i]
        for j in range(i + 1, len(array)):
            num2 = array[j]

            if num1 + num2 == targetSum:
                return [num1, num2]

    return []

    # Time Complexity: O(n^2)
    # Space Complexity: O(1)


def twoNumberSumOptimized(array, targetSum):
    hash = {}

    for num in array:
        potentialMatch = targetSum - num
        if potentialMatch in hash:
            return [num, potentialMatch]
        else:
            hash[num] = True

    return []

    # Time Complexity: O(n)
    # Space Complexity: O(n)


def twoNumberSumOptimized2(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1

    while left < right:
        num1 = array[left]
        num2 = array[right]

        if num1 + num2 == targetSum:
            return [num1, num2]
        elif num1 + num2 > targetSum:
            right -= 1
        else:
            left +=1
        
    return []

    # Time Complexity: O(nlog(n))
    # Space Complexity: O(1)