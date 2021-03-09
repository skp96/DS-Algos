class Solution:
    def num_is_islands_bfs(self, grid):
        if not grid:
            return 0

        queue, visited = [], set()
        num_of_islands = 0
        rows, cols = len(grid), len(grid[0])

        def bfs(r, c):
            queue.append((r, c))

            while queue:
                row, col = queue.pop(0)
                directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

                for direction in directions:
                    new_row, new_col = row + direction[0], col + direction[1]
                    if (new_row in range(rows)) and (new_col in range(cols)) and grid[new_row][new_col] == '1' and (new_row, new_col) not in visited:
                        queue.append((new_row, new_col))
                        visited.add((new_row, new_col))

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1" and (r, c) not in visited:
                    num_of_islands += 1
                    bfs(r, c)

        return num_of_islands

# Time Complexity: O(r X c), where r is the number of rows and c is the number of columns
# Space Complexity: O(r X c + r X c) --> O(r X c) : worst case scenario would be that the entire grid is filled with 1's, in that case the queue would be filled with all elements as well as visited

      def num_is_islands_dfs(self, grid):
        if not grid:
            return 0
        
        visited = set()
        num_of_islands = 0
        rows = len(grid)
        cols = len(grid[0])
        
        def dfs(row, col):
            if (row not in range(rows)) or (col not in range(cols)) or grid[row][col] == "0" or (row, col) in visited:
                return
            
            visited.add((row, col))
            directions = [[0,1],[0,-1],[-1,0],[1,0]]
            for direction in directions:
                new_row, new_col = row + direction[0], col + direction[1]
                dfs(new_row, new_col)
        
        
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1' and (r,c) not in visited:
                    num_of_islands += 1
                    dfs(r ,c)
        
        return num_of_islands

# Time Complexity: O(r X c), where r is the number of rows and c is the number of cols
# Space Complexity: O(r X c)
