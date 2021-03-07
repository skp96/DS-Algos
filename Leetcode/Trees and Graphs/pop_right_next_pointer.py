class Node:
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


class Solution:
    def connect(self, root):
        queue = [(root, 0)]

        while queue:
            node, depth = queue.pop(0)

            if node is None:
                continue

            if not len(queue):
                node.next = None
            elif depth == queue[0][1]:
                node.next = queue[0][0]
            else:
                node.next = None

            queue.append((node.left, depth + 1))
            queue.append((node.right, depth + 1))

        return root

# Time Complexity: O(n)
# Space Complexity: O(n)

    def connect_optimized(self, root):
        if not root:
            return root

        # goal is to connect all left nodes to the right,
        left_most = root

        while left_most.left:
            head = left_most

            while head:
                head.left.next = head.right

                if head.next:
                    head.right.next = head.next.left

                head = head.next

            left_most = left_most.left

        return root

# Time Complexity: O(n)
# Space Complexity: O(1)
