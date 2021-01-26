def productSum(array):
    return productSumHelper(array, depth=1)


def productSumHelper(array, depth=1):
    sum = 0

    for num in array:
        if isinstance(num, list):
            sum += productSumHelper(num, depth + 1)
        else:
            sum += num

    return sum * depth

# Time Complexity: O(n)
# Space Complexity: O(d) where d is the greatest depth in the array
