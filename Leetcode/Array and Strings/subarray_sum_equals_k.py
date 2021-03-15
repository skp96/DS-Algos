"""
- input: an array of ints and an int k
- output: return an int representing the total number of continuous subarrays whose sum equals k
- logic:
  - use a hash to keep track of cumlative sum at each int in array and its frequency
  - iterate through array
    - add num to sum
    - if sum - k exists in in dict (the difference represents a number (or cumlative sum) already vistited in the input array)
    - we take the freq and add it to our count variable
    - now that we have a new sum, add it to our dictionary
      - if it already exists, we increment its counter by 1 since we've come across it again
      - else we add it and give it a frequency of 1
    return count
"""


class Solution:
    def sub_array_sum(self, nums, k):
        cumlative_dict = {}
        cumlative_dict[0] = 1
        sum = 0
        count = 0

        for num in nums:
            sum += num
            if (sum - k) in cumlative_dict:
                count += cumlative_dict[sum - k]

            if sum in cumlative_dict:
                cumlative_dict[sum] += 1
            else:
                cumlative_dict[sum] = 1

        return count

# Time Complexity: O(n)
# Space Complexity: O(1)
    def sub_array_sum(self, nums, k):
        count = 0
        for start in range(len(nums)):
            sum = 0
            for end in range(start, len(nums)):
                sum += nums[end]
                if sum == k:
                    count += 1

        return count

# Time Complexity: O(n^2)
# Space Complexity: O(1)
