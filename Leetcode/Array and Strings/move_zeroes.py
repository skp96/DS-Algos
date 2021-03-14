class Solution:
    def move_zeroes(self, nums):
        to_move_pointer = 0

        for idx in range(len(nums)):
            num = nums[idx]

            if num != 0:
                nums[idx], nums[to_move_pointer] = nums[to_move_pointer], nums[idx]
                to_move_pointer += 1

        return nums

# Time Complexity: O(n)
# Space Complexity: O(1)
