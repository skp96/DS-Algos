"""
- initially, checked if every node was less than or greater than its parent node; however, this approach will not work for all cases
even if a subtree fufills the BST property, the entire tree might not. For example, root = 5 and current node on left of tree is 5, and to its right is an 
11. Subtree where 5 and to its right is 11 will fulfill the BST property; however, as an entire tree it will not: root = 5 < 11 so it should not be on the left side of the tree
- another approach would be to keep track of the min and max values of a particular node that is being visited. 
For example, if we are visiting a node in the right of a subtree, we know that its value must be greater than or equal its most min value (aka its parent).
If we are visiting a node to the left of a subtree, we know its value must be less than its most max value (aka its parent)
"""


class BST:
    def _init__(self, value):
        self. value = value
        self.left = None
        self.right = None


def validate_bst(tree):
    return validate_bst_helper(tree, min_value=float('-inf'), max_value=float('inf'))


def validate_bst_helper(tree, min_value, max_value):
    if tree is None:
        return True

    if tree.value >= max_value or tree.value < min_value:
        return False

    return validate_bst_helper(tree.left, min_value, tree.value) and validate_bst_helper(tree.right, tree.value, max_value)

# Time Complexity: O(n)
# Space Complexity: O(d), where d is the longest depth of the tree
