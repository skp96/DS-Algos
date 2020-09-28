def moveElementToEnd(array, toMove):
    pointer = 0

    for i in range(len(array)):
        num = array[i]

        if num != toMove:
            array[pointer], array[i] = array[i], array[pointer]
            pointer += 1

    return array

# Time Complexity: O(n)
# Space Complexity: O(1)


def moveElementToEndII(array, toMove):
    i = 0
    j = len(array) - 1

    while i < j:
        while i < j and array[j] == toMove:
            j -= 1

        if array[i] == toMove:
            array[i], array[j] = array[j], array[i]
        i += 1

    return array

# Time Complexity: O(n)
# Space Complexity: O(1)
