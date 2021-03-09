class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def k_smallest(self, root, k):
        if root is None:
            return

        stack = []

        while True:
            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()
            k -= 1
            if not k:
                return root.val

            root = root.right

# Time Complexity: O(h), where h is the height of the tree
# Balanced Tree: O(logh), Unbalanced Tree: O(n) --> skewed one way
# Space Complexity: O(h), where h is the height of the tree

    def k_smallest_recur(self, root, k):
        return self.k_smallest_recur_helper(root)[k - 1]

    def k_smallest_recur_helper(self, root):
        return self.k_smallest_recur_helper(root.left) + [root.val] + self.k_smallest_recur_helper(root.right) if root else []

# Time Complexity: O(n)
# Space Complexity: O(n)
