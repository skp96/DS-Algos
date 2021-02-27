class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
# Time Complexity: avg O(log(n)), worst O(n)
# Space Complexity: O(1)

    def insert(self, value):
        node = BST(value)
        current_node = self

        while current_node:
            if value < current_node.value:
                if current_node.left is None:
                    current_node.left = node
                    break
                else:
                    current_node = current_node.left
            elif value >= current_node.value:
                if current_node.right is None:
                    current_node.right = node
                    break
                else:
                    current_node = current_node.right

        return self

# Time Complexity: avg O(log(n)), worst O(n)
# Space Complexity: O(1)
    def contains(self, value):
        current_node = self

        while current_node:
            if value < current_node.value:
                current_node = current_node.left
            elif value > current_node.value:
                current_node = current_node.right
            else:
                return True
        return False

# Time Complexity: ave O(log(n)), worst O(1)
# Space Complexity: O(1)
    def remove(self, value, parent_node=None):
        current_node = self

        while current_node:
            if value < current_node.value:
                parent_node = current_node
                current_node = current_node.left
            elif value > current_node.value:
                parent_node = current_node
                current_node = current_node.right
            else:
                # edge case where the node that needs to be removed has a left and right child
                if current_node.left is not None and current_node.right is not None:
                    current_node.value = current_node.right.get_min_value()
                    current_node.right.remove(current_node.value, current_node)
                # edge case where the root node has only one child, either a left or right child
                elif parent_node is None:
                    if current_node.left is not None:
                        current_node.value = current_node.left.value
                        current_node.right = current_node.left.right
                        current_node.left = current_node.left.left
                    elif current_node.right is not None:
                        current_node.value = current_node.right.value
                        current_node.left = current_node.right.left
                        current_node.right = current_node.right.right
                    else:
                        current_node.value = None
                # edge cases where the node that needs to be removed has one child or none
                elif parent_node.left == current_node:
                    parent_node.left = current_node.left if current_node.left is not None else current_node.right
                elif parent_node.right == current_node:
                    parent_node.right = current_node.right if current_node.right is not None else current_node.left
                break
        return self

    def get_min_value(self):
        current_node = self

        while current_node.left:
            current_node = current_node.left

        return current_node.value
