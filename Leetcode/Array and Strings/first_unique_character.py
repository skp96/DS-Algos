from collections import Counter


class Solution:

    def first_unique(self, s):
        count = Counter(s)

        for idx, char in enumerate(s):
            if count[char] == 1:
                return idx

        return -1

# Time Complexity: O(n), where n is the number of characters in the string
# Space Complexity: O(1) --> english alaphabet has a constant number of letters, 26
