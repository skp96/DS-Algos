def findThreeLargest(array):
    output = [None, None, None]

    for num in array:
        findThreeLargestHelper(num, output)

    return output


def findThreeLargestHelper(num, output):
    if output[2] is None or num > output[2]:
        shiftAndUpdate(num, output, 2)
    elif output[1] is None or num > output[1]:
        shiftAndUpdate(num, output, 1)
    elif output[0] is None or num > output[0]:
        shiftAndUpdate(num, output, 0)


def shiftAndUpdate(num, output, shiftValue):
    for i in range(shiftValue + 1):
        if i == shiftValue:
            output[i] = num
        else:
            output[i] = output[i + 1]

# Time Complexity: O(n)
# Space Complexity: O(1)
