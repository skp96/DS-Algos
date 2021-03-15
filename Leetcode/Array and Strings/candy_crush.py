"""
- input: 2D int array representing grid of candy
- output: return a stable board according to the following rules:
  - if 3 or more candies of the same type (same int) crush them all at the same time - these positions become empty
  - after crushing them at the same time, if any empty space on the baord has candies on top, drop the candies
  - after the above steps, more candies may need to be crushed, if so repeate the above steps
  - if no more candies need to be crushed, return current board
"""


class Solution:
    def candyCrush(self, board):
        rows_len, cols_len = len(board), len(board[0])
        todo = False

        for row in range(rows_len):
            for col in range(cols_len-2):
                if abs(board[row][col]) == abs(board[row][col+1]) == abs(board[row][col+2]) != 0:
                    board[row][col] = board[row][col +
                                                 1] = board[row][col+2] = -abs(board[row][col])
                    todo = True

        for row in range(rows_len-2):
            for col in range(cols_len):
                if abs(board[row][col]) == abs(board[row + 1][col]) == abs(board[row + 2][col]) != 0:
                    board[row][col] = board[row+1][col] = board[row +
                                                                2][col] = -abs(board[row][col])
                    todo = True

        for col in range(cols_len):
            write_row = rows_len - 1
            for row in range(rows_len-1, -1, -1):
                if board[row][col] > 0:
                    board[write_row][col] = board[row][col]
                    write_row -= 1
            for wr in range(write_row, -1, -1):
                board[wr][col] = 0

        return self.candyCrush(board) if todo else board

# Time Complexity: O(R*C)^2
# Space Complexity: O(1)

    def candyCrusy(self, board):
        m, n = len(board), len(board[0])
        stable = False
        while True:
            stable = True
            crushable = set()
            # 1. check for horizontal crushables
            for x in range(m):
                for y in range(n-2):
                    if board[x][y] == board[x][y+1] == board[x][y+2] != 0:
                        stable = False
                        crushable.update([(x, y), (x, y+1), (x, y+2)])

                    # 2. check for vertical crushables
            for x in range(m-2):
                for y in range(n):
                    if board[x][y] == board[x+1][y] == board[x+2][y] != 0:
                        stable = False
                        crushable.update([(x, y), (x+1, y), (x+2, y)])

                    # 5. if no candies were crushed, we're done
            if stable:
                return board

                # 3. crush the candies
            for x, y in crushable:
                board[x][y] = -1

                # 4. let the candies "fall"
            for y in range(n):
                offset = m - 1
                for x in range(m-1, -1, -1):  # loop through column backward
                    if board[x][y] > 0:
                        board[offset][y] = board[x][y]
                        offset -= 1
                for x in range(offset, -1, -1):
                    board[x][y] = 0

# Time Complexity: O((R*C)^2)
# Space Complexity: O(R*C)
