class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def right_side_view(self, root):
        if root is None:
            return []

            right_side = []
            next_level = [root]

            while next_level:
                current_level = next_level
                next_level = []

                while current_level:
                    node = current_level.pop(0)
                    if node.left:
                        next_level.append(node.left)
                    if node.right:
                        next_level.append(node.right)

                right_side.append(node.val)

            return right_side

# Time Complexity: O(n)
# Space Complexity: O(d), where d is the tree diameter

    def right_side_view_2(self, root):
        if root is None:
            return []

        right_side = []
        queue = [1, None]

        while queue:
            current_level_node = queue.pop(0)

            while current_level_node:
                if current_level_node.left:
                    queue.append(current_level_node.left)
                if current_level_node.right:
                    queue.append(current_level_node.right)

                previous = current_level_node
                current_level_node = queue.pop(0)

            right_side.append(previous.value)

            if queue:
                queue.append(None)

        return right_side

# Time Complexity: O(n)
# Space Complexity: O(d)
