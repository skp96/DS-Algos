def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()
    idxOne = 0
    idxTwo = 0
    smallestDiff = float('inf')
    smallestPair = []

    while idxOne < len(arrayOne) and idxTwo < len(arrayTwo):
        firstNum = arrayOne[idxOne]
        secondNum = arrayTwo[idxTwo]
        diff = abs(firstNum - secondNum)

        if diff == 0:
            return [firstNum, secondNum]
        elif diff < smallestDiff:
            smallestDiff = diff
            smallestPair = [firstNum, secondNum]

        if firstNum < secondNum:
            idxOne += 1
        else:
            idxTwo += 1

    return smallestPair
