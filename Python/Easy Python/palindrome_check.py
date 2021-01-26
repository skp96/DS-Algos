def isPalindrome(string):
    for i in range(int(len(string) / 2)):
        frontChar = string[i]
        rearChar = string[len(string) - 1 - i]

        if frontChar != rearChar:
            return False

    return True

# Time Complexity: O(n)
# Space Complexity: O(1)
