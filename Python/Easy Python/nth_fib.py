def getNthFibRecur(n):
    if n == 1:
        return 0

    if n == 2:
        return 1

    return getNthFibRecur(n - 1) + getNthFibRecur(n - 2)

# Time Complexity: O(2^n)
# Space Complexity: O(n)


def getNthFibMemo(n, memo={1: 0, 2: 1}):
    if n in memo:
        return memo[n]
    else:
        memo[n] = getNthFibMemo(n - 1, memo) + getNthFibMemo(n - 2, memo)
        return memo[n]

# Time Complexity: O(n)
# Space Complexity: O(n)


def getNthFibIter(n):
    fibArray = [0, 1]

    if n == 1:
        return fibArray[0]
    if n == 2:
        return fibArray[1]

    while len(fibArray) < n:
        fibNum = fibArray[len(fibArray) - 1] + fibArray[len(fibArray) - 2]
        fibArray.append(fibNum)

    return fibArray[len(fibArray) - 1]

# Time Complexity: O(n)
# Space Complexity: O(n)


def getNthFibIterII(n):
    lastTwo = [0, 1]
    counter = 3
    while counter <= n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    return lastTwo[1] if n > 1 else lastTwo[0]

    # Time Complexity: O(n)
    # Space Complexity: O(1)
