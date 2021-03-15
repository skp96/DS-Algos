class Solution:
    def compress(self, chars):
        anchor = write = 0

        for read, char in enumerate(chars):
            if read + 1 == len(chars) or chars[read + 1] != char:
                chars[write] = chars[anchor]
                write += 1
                if read > anchor:
                    for digit in str(read - anchor + 1):
                        chars[write] = digit
                        write += 1
                anchor = read + 1

        return write

# Time Complexity: O(n)
# Space Complexity: O(1)
