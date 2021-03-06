class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    # Time Complexity: O(n)
    # Space Complexity: O(n)

    def flatten(self, root):
        return self.flatten_helper(root)

    def flatten_helper(self, node):
        if node is None:
            return None

        if node.left is None and node.right is None:
            return node

        left_tail = self.flatten_helper(node.left)

        right_tail = self.flatten_helper(node.right)

        if left_tail:
            left_tail.right = node.right
            node.right = node.left
            node.left = None

        return right_tail if right_tail else left_tail

    def flatten_iter(self, root):
        # since using the call stack will be inefficient when working with large binary trees, the idea is to build a custom stack that will be allocated memory on the heap. Heap memory is larger than stack memory. Goal is to use the custom stack and mimic the different recursion states.
        if not root:
            return None

        # represents the different states of recursion, more importantly the two values will be used to determine when to add nodes and remove nodes from the stack
        START, END = 1, 2

        tail_node = None
        stack = [(root, START)]

        while stack:
            current_node, recursion_state = stack.pop()

            # the current node is a leaf node, in otherwords, the tail node
            if current_node.left is None and current_node.right is None:
                tail_node = current_node
                continue

            # we haven't processed the left if it exists, or the right
            if recursion_state == START:
                if current_node.left:
                  # recall when solving the problem recursively, until the left hasn't been searched completely the root node doesn't come off the call stack
                  # or we can interpret this as; we're done processing one side of the current node (e.g. left), and we will need to rewire the connection to form a right skewed linked list, so we add current_node back to the stack so we can access its right node and rewire the connection.
                    stack.append((current_node, END))
                    stack.append((current_node.left, START))
                elif current_node.right:
                    # current node doesn't have a left, and since we're trying to build a right skewed linked list, we want to explore the right of the current node --> maybe the right side has left branches
                    stack.append((current_node.right, START))
            # we have processed the left side of the current node
            else:
                right_node = current_node.right

                # since our current node has a recursion state of end, which means we have processed on side of the current node (e.g left), we must have set the tail node
                if tail_node:
                    tail_node.right = current_node.right
                    current_node.right = current_node.left
                    current_node.left = None
                    right_node = tail_node.right

                if right_node:
                    stack.append((right_node, START))

# Time Complexity: O(n)
# Space Complexity: O(n)
