class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def is_valid_BST(self, root):
        min_val = float('-inf')
        max_val = float('inf')

        return self.is_valid_BST_helper(root, min_val, max_val)

    def is_valid_BST_helper(self, root, min_val, max_val):
        if root is None:
            return True

        if root.val <= min_val or root.val >= max_val:
            return False

        return self.is_valid_BST_helper(root.left, min_val, root.val) and self.is_valid_BST_helper(root.right, root.val, max_val)

# Time Complexity: O(n), where n is the number of nodes in the BST
# Space Complexity: O(d), where d is the greatest depth in the BST
