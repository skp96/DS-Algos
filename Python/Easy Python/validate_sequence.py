def isValidateSequence(array, sequence):
    seqIdx = 0
    for num in array:
        if num == sequence[seqIdx]:
            seqIdx += 1
            if num == len(sequence):
                return True
    return False

# Time Complexity O(n)
# Space Complexity O(1)
