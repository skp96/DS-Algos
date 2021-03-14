from collections import Counter


class Solution:
  def first_unique(self, s):
    if not len(s):
            return -1

        char_tracker = {}
        idx_tracker = {}
        
        for idx, char in enumerate(s):
            if char in char_tracker:
                char_tracker[char] += 1
            else:
                char_tracker[char] = 0
    
            if char not in idx_tracker:
                idx_tracker[char] = idx
  
        for key in char_tracker:
            if char_tracker[key] == 0:
                return idx_tracker[key]
        
        return -1

# Time Complexity: O(n + n) --> O(n)
# Space Complexity: O(n + n) --> O(n)

  def first_unique(self, s):
    count = Counter(s)

    for idx, char in enumerate(s):
      if count[char] == 1:
        return idx
    
    return -1

# Time Complexity: O(n), where n is the number of characters in the string
# Space Complexity: O(1) --> english alaphabet has a constant number of letters, 26

