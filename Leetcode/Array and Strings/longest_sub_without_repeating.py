class Solution:
    def length_of_longest_substring(self, s):
        seen = {}

        begin = 0
        end = 0
        longest = 0

        while end < len(s):
            char = s[end]

            if char in seen and seen[char] >= begin:
                begin = seen[char] + 1
            else:
                seen[char] = end
                end += 1

            if end - begin > longest:
                longest = end - begin

        return longest

# Time Complexity: O(n)
# Space Complexity: O(n)
