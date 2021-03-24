"""
- input: given an m X n matrix
- output: return all elements of the matrix in spiral order
- logic:
  - using pointer approach to mimic table rows and columns to efficiently traverse the matrix
"""


def spiral_order(matrix):
    start_col = 0
    end_col = len(matrix[0]) - 1

    start_row = 0
    end_row = len(matrix) - 1

    output = []

    while start_col <= end_col and start_row <= end_row:
            for col in range(start_col, end_col + 1):
                output.append(matrix[start_row][col])

            for row in range(start_row + 1, end_row + 1):
                output.append(matrix[row][end_col])

            for col in reversed(range(start_col, end_col)):
                if start_row == end_row:
                    break
                output.append(matrix[end_row][col])

            for row in reversed(range(start_row + 1, end_row)):
                if start_col == end_col:
                    break
                output.append(matrix[row][start_col])

            start_col += 1
            end_col -= 1

            start_row += 1
            end_row -= 1

        return output

# Time Complexity: O(n), total number of elements in the input matrix
# Space Complexity: O(n)
