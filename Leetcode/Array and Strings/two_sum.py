class Solution:
    def two_sum(self, nums, target):
        n = {}

        for idx, num in enumerate(nums):
            if target - num in n:
                return [n[target - num], idx]
            else:
                n[num] = idx

        return -1

# Time Complexity: O(n)
# Space Complexity: O(n)
