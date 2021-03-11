class Solution:
    def merge(self, nums1, m, nums2, n):
        for i in range(n):
            nums[i + m] = nums[i]

        return nums.sort()

# Time Complexity: O(m + nlogn(m+n))
# Space Complexity: O(n), where n is the length of nums2

    def merge(self, nums1, m, num2, n):
        copy_nums1 = nums1[:m]
        p1 = 0
        p2 = 0

        for p in range(m + n):
            if p2 >= n or (p1 < m and copy_nums1[p1] <= nums2[p2]):
                nums1[p] = copy_nums1[p1]
                p1 += 1
            else:
                nums1[p] = nums2[p2]
                p2 += 1

        return nums1

# Time Complexity: O(m + n)
# Space Complexity: O(m)

    def merge(self, num1, m, num2, n):
        p1 = len(m) - 1
        p2 = len(n) - 1

        for p in range(m + n - 1, -1, -1):
            if p2 < 0:
                break
            if p1 >= 0 and nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            else:
                nums1[p] = nums2[p2]
                p2 -= 1

# Time Complexity: O(m + n)
# Space Complexity: O(1)
