class Node:
    def _init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right


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

            if node.left:
                queue.append((node.left, depth + 1))

            if node.right:
                queue.append((node.right, depth + 1))

        return root

# Time Complexity: O(n)
# Space Complexity: O(n)

# use dummy node to create connections and then iterate through connections to create more connections
    def connect_optimized(self, root):

        place_holder = root

        # going to use a dummy node to help with next connections
        tail = dummy = Node(0)

        while root:
            # set tail's next to be left of root
            tail.next = root.left
            # if left was actual node, then move our position in the tail linked list
            if tail.next:
                tail = tail.next
            # set tail's next to be right
            tail.next = root.right
            # if right was actual node, then move position in the tail linked list
            if tail.next:
                tail = tail.next

            # move onto the next connection
            root = root.next

            # if there is no connection, then we want to reset tail linked list (refer back to dummy), and root to be first node stored in the dummy (left node)
            if not root:
                tail = dummy
                root = dummy.next

        return place_holder

# Time Complexity: O(n)
# Space Complexity: O(1)
