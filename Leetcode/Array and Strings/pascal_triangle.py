class Solution:
  def generate(self, numRows):
      if numRows == 0:
            return []

        if numRows == 1:
            return [[1]]
    
        if numRows == 2:
            return [[1], [1,1]]
    
        pascal = [[1], [1,1]]

        while len(pascal) < numRows:
            lastRow = pascal[-1]
            new_row = [1]
            for i in range(len(lastRow) - 1):
                new_row.append(lastRow[i] + lastRow[i + 1])
            new_row.append(1)
            pascal.append(new_row)
    
        return pascal

# Time Complexity: O(n^2)
# Space Complexity: O(n^2)
