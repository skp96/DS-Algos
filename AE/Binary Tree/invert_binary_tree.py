class BinaryTree:
    def __intit__(self, value):
        self.value = value
        self.left = None
        self.right = None


def invert_binary_tree_recur(tree):
    if tree is None:
        return

    tree.left, tree.right = tree.right, tree.left
    invert_binary_tree(tree.left)
    invest_binary_tree(tree.right)

# Time Complexity: O(n)
# Space Complexity: O(d), where d is the longest depth (branch) of the tree


def invert_binary_tree(tree):
    queue = [tree]

    while len(stack) > 0:
        node = queue.pop(0)
        if node is None:
            continue

        node.left, node.right = node.right, node.left

        queue.append(node.left)
        queue.append(node.right)

# Time Complexity: O(n)
# Space Complexity: O(n)
