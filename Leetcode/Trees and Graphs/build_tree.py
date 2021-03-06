class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def __init__(self, preorder_idx=0):
        self.preorder_idx = preorder_idx  # keep track of preorder position

    def build_tree(self, preorder, inorder):
        # instead of having to scan inorder, we create an inorder dictionary so we can use preorder elements to lookup the respective index in inorder
        inorder_dict = {val: idx for idx, val in enumerate(inorder)}

        return self.build_tree_helper(preorder, inorder_dict, 0, len(inorder) - 1, self.preorder_idx)

    def build_tree_helper(self, preorder, inorder_dict, beg, end, preorder_idx):
        if beg > end return None  # instead of slicing arrays and having to check for a base case of empty array, we check if beg > end which would represent an empty array
        # take preorder element and create a tree node
        root = TreeNode(preorder[self.preorder_idx])
        # find index value of element in inorder
        index = inorder_dict[root.val]

        self.preorder_idx += 1  # increment position in preorder array

        # instead of having to create subarrays of elements to the left and right of element, we pass in pointer values representing beg and end of subarrays
        root.left = self.build_tree_helper(
            preorder, inorder_dict, beg, index - 1, self.preorder_idx)
        root.right = self.build_tree_helper(
            preorder, inorder_dict, index + 1, end, self.preorder_idx)

        return root

# Time Complexity: O(m + n), where m represents having to create an inorder dictionary, and n represents having to iterate through the preorder array
# Space Complexity: O(m + n), where m represents the size of the inorder dictionary, and n represents the recursive calls in the call stack
