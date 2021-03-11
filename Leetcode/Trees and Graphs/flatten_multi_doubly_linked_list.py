class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child


class Solution:
    def flatten(self, head):
        if not head:
            return None

        previous_node = Node(None, None, head, None)

        self.flatten_helper(previous_node, head)

        previous_node.next.prev = None
        return previous_node.next

    def flatten_helper(self, previous, current):
        if not current:
            return previous

        previous.next = current
        current.prev = previous

        next_node = current.next
        tail = self.flatten_helper(current, current.child)
        current.child = None
        return self.flatten_helper(tail, next_node)

# Time Complexity: O(n)
# Space Complexity: O(n), in worst case scenario you would have a unbalanced binary tree where nodes are connected through child pointers. In this casse
# the number of recursive calls on the call stack would pile up and take N space

  def flatten_iter(self, head):
    if not head:
      return None
    
    previous_node = Node(None, None, head, None)
    previous = previous_node

    stack = [head]

    while stack:
      node = stack.pop()

      previous.next = node
      node.prev = previous

      if node.next:
        stack.append(node.next)
      
      if node.child:
        stack.append(node.child)
        node.child = None
      
      previous = node
    
    previous_node.next.prev = None
    return previous_node.next

# Time Complexity: O(n)
# Space Complexity: O(n)
