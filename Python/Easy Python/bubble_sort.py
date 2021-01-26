def bubbleSort(array):
    swap = True

    while swap:
        swap = False

        for i in range(len(array) - 1):

            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]
                swap = True
    return array

    # Time Complexity: O(n^2)
    # Space Complexity: O(1)
