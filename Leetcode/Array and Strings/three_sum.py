class Solution:
    def three_sum(self, nums):
        nums.sort()
        result = []

        for i in range(len(nums) - 2):
            if nums[i] > 0:
                break

            if i == 0 or nums[i - 1] != nums[i]:
                self.check_and_append(nums, i, result)

    def check_and_append(self, nums, pos, result):
        low = pos
        high = len(nums) - 1

        while low < high:
            sum = nums[pos] + nums[low] + nums[high]

            if sum == 0:
                result.append([nums[pos], nums[low], nums[hight]])
                low += 1
                high -= 1

                while low < high and nums[low] == nums[low - 1]:
                    low += 1
            elif sum > 0:
                high -= 1
            else:
                low -= 1

        return result
